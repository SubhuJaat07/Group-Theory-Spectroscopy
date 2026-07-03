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
  { id: 'linear', question: 'Kya molecule Linear hai?', yes: 'c_inf', no: 'high_sym' },
  { id: 'c_inf', question: 'Kya σh plane hai?', yes: 'D∞h', no: 'C∞v', pointGroup: 'C∞v' },
  { id: 'high_sym', question: 'Kya koi Cₙ axis hai jahan n > 2?', yes: 'td_oh', no: 'low_sym' },
  { id: 'td_oh', question: 'Kya 3+ C₂ axes hain C₄ ke perpendicular?', yes: 'Oh', no: 'Td', pointGroup: 'Td' },
  { id: 'low_sym', question: 'Kya Cₙ principal axis hai?', yes: 'has_cn', no: 'no_cn' },
  { id: 'has_cn', question: 'Kya n perpendicular C₂ axes hain?', yes: 'dn_check', no: 'cn_check' },
  { id: 'dn_check', question: 'Kya σh plane hai?', yes: 'Dnh', no: 'dn_d_check' },
  { id: 'dn_d_check', question: 'Kya n σd planes hain?', yes: 'Dnd', no: 'Dn', pointGroup: 'Dn' },
  { id: 'cn_check', question: 'Kya σh plane hai?', yes: 'Cnh', no: 'cn_v_check' },
  { id: 'cn_v_check', question: 'Kya n σv planes hain?', yes: 'Cnv', no: 'Sn_check' },
  { id: 'Sn_check', question: 'Kya S₂n improper axis hai?', yes: 'S2n', no: 'Cn', pointGroup: 'Cn' },
  { id: 'no_cn', question: 'Kya σ plane hai?', yes: 'Cs', no: 'i_check' },
  { id: 'i_check', question: 'Kya inversion center hai?', yes: 'Ci', no: 'C1', pointGroup: 'Ci' },
];

const pointGroupResults: Record<string, string> = {
  'D∞h': 'CO₂, H₂, N₂ — Linear, σh + i center',
  'C∞v': 'HCN, CO — Linear, no σh',
  'Oh': 'SF₆, [Fe(CN)₆]⁴⁻ — Octahedral',
  'Td': 'CH₄, CCl₄ — Tetrahedral',
  'Dnh': 'C₆H₆ (D₆h), BF₃ (D₃h)',
  'Dnd': 'Ethane staggered (D₃d)',
  'Cnh': 'Trans-C₂H₂Cl₂ (C₂h)',
  'Cnv': 'H₂O (C₂v), NH₃ (C₃v)',
  'S2n': 'S₄ — Allene type',
  'Cs': 'CH₂ClF — σ plane only',
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
                  Haan ✓
                </motion.button>
                <motion.button
                  onClick={() => handleAnswer('no')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 text-sm font-medium cursor-pointer hover:bg-red-500/30 transition-colors"
                >
                  Nahi ✗
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