'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface FlowNode {
  id: string;
  question: string;
  yes: string;
  no: string;
  pointGroup?: string;
}

const nodes: FlowNode[] = [
  { id: 'linear', question: 'Is the molecule linear?', yes: 'c_inf', no: 'high_sym' },
  { id: 'c_inf', question: 'Is there a σh plane?', yes: 'D∞h', no: 'C∞v', pointGroup: 'C∞v' },
  { id: 'high_sym', question: 'Is there a Cn axis where n &gt; 2?', yes: 'td_oh', no: 'low_sym' },
  { id: 'td_oh', question: 'Are there 3+ C2 axes perpendicular to C4?', yes: 'Oh', no: 'Td', pointGroup: 'Td' },
  { id: 'low_sym', question: 'Is there a Cn principal axis?', yes: 'has_cn', no: 'no_cn' },
  { id: 'has_cn', question: 'Are there n perpendicular C2 axes?', yes: 'dn_check', no: 'cn_check' },
  { id: 'dn_check', question: 'Is there a σh plane?', yes: 'Dnh', no: 'dn_d_check' },
  { id: 'dn_d_check', question: 'Are there n σd planes?', yes: 'Dnd', no: 'Dn', pointGroup: 'Dn' },
  { id: 'cn_check', question: 'Is there a σh plane?', yes: 'Cnh', no: 'cn_v_check' },
  { id: 'cn_v_check', question: 'Are there n σv planes?', yes: 'Cnv', no: 'Sn_check' },
  { id: 'Sn_check', question: 'Is there an S2n improper axis?', yes: 'S2n', no: 'Cn', pointGroup: 'Cn' },
  { id: 'no_cn', question: 'Is there a σ plane?', yes: 'Cs', no: 'i_check' },
  { id: 'i_check', question: 'Is there an inversion center?', yes: 'Ci', no: 'C1', pointGroup: 'Ci' },
];

const pointGroupResults: Record<string, string> = {
  'D∞h': 'CO2, H2, N2 — Linear, σh + i center',
  'C∞v': 'HCN, CO — Linear, no σh',
  'Oh': 'SF6, [Fe(CN)6]4- — Octahedral',
  'Td': 'CH4, CCl4 — Tetrahedral',
  'Dnh': 'C6H6 (D6h), BF3 (D3h)',
  'Dnd': 'Ethane staggered (D3d)',
  'Cnh': 'Trans-C2H2Cl2 (C2h)',
  'Cnv': 'H2O (C2v), NH3 (C3v)',
  'S2n': 'S4 — Allene type',
  'Cs': 'CH2ClF — σ plane only',
  'Ci': 'Anti-1,2-dichloroethane — i center only',
  'C1': 'CHFClBr — No symmetry',
};

export default function PointGroupFlowchart() {
  const [currentNode, setCurrentNode] = useState('linear');
  const [history, setHistory] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const node = nodes.find(n => n.id === currentNode);
  if (!node) return null;

  const handleAnswer = (answer: 'yes' | 'no') => {
    const nextId = answer === 'yes' ? node.yes : node.no;
    if (pointGroupResults[nextId]) {
      setResult(nextId);
      setHistory([...history, `${node.question} → ${answer.toUpperCase()}`]);
    } else {
      setHistory([...history, `${node.question} → ${answer.toUpperCase()}`]);
      setCurrentNode(nextId);
    }
  };

  const reset = () => {
    setCurrentNode('linear');
    setHistory([]);
    setResult(null);
  };

  return (
    <div className="space-y-4">
      <div className="bg-[#0f172a]/60 rounded-xl p-4 border border-[#334155]/50">
        {/* Progress */}
        <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2">
          {history.map((h, i) => (
            <div key={i} className="flex items-center gap-1 shrink-0">
              <span className="text-[10px] text-slate-500 bg-[#1e293b] px-2 py-0.5 rounded">
                {h}
              </span>
              {i < history.length - 1 && <ChevronRight className="w-3 h-3 text-slate-600" />}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key={currentNode}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-3">
                <span className="text-emerald-400 text-lg">?</span>
              </div>
              <p className="text-white font-medium text-sm sm:text-base mb-4">{node.question}</p>
              <div className="flex justify-center gap-3">
                <motion.button
                  onClick={() => handleAnswer('yes')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-sm font-medium cursor-pointer hover:bg-emerald-500/30 transition-colors"
                >
                  Yes
                </motion.button>
                <motion.button
                  onClick={() => handleAnswer('no')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 text-sm font-medium cursor-pointer hover:bg-red-500/30 transition-colors"
                >
                  No
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 mb-3"
              >
                <div className="text-xs text-emerald-400 mb-1">Point Group</div>
                <div className="text-2xl font-black text-white">{result}</div>
              </motion.div>
              <p className="text-sm text-slate-300">{pointGroupResults[result]}</p>
              <motion.button
                onClick={reset}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-4 py-1.5 rounded-lg bg-[#334155] text-sm text-slate-300 hover:text-white cursor-pointer transition-colors"
              >
                Start Again
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}