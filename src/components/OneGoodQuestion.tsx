'use client';

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';

const OneGoodQuestion = () => {
  const sources = {
    'Systemic Design': 'Source: Design Council Systemic Design Framework',
    'GDS Service Standard': 'Source: UK Government Design Principles',
    'Accessibility (WCAG 2)': 'Source: WCAG 2.1 Guidelines',
    Sustainability: 'Source: Sustainable Design Toolkit (adapted)',
    'Design Justice': 'Source: Design Justice Network Principles',
    'Trauma-Informed Design': 'Source: Chayn – Trauma-Informed Design Guide',
  };

  const questions = {
    'Systemic Design': [
      'Whose perspective is missing from the design process right now?',
      'What power is reinforcing the current state? Who benefits if nothing changes?',
      'Where are we intervening in the system — symptoms, causes, or structures?',
      'What’s trying to emerge in this system that we keep overriding?',
      'If we paused to zoom out, what patterns would we see repeating?',
      'What interdependencies are we ignoring or over-simplifying?',
      'Are we working on part of the problem, or the whole?',
      'Who holds invisible knowledge that isn’t currently shaping our decisions?',
      'What unintended consequences might ripple from this solution?',
    ],
    'GDS Service Standard': [
      'Are we meeting a real user need, or a bureaucratic assumption?',
      'What part of this service would confuse someone in crisis?',
      'Is our language clear, compassionate, and free of jargon?',
      'Can this journey be completed quickly by someone with low digital confidence?',
      'Are we learning from data — or just proving what we already believe?',
      'Are we designing for the whole service, end-to-end?',
      'Are we iterating quickly enough to learn from real users?',
      'Are we collaborating with the right people across government or delivery chains?',
    ],
    'Accessibility (WCAG 2)': [
      'Can this be understood without seeing, hearing, or speaking?',
      'Can this be used with a screen reader, keyboard-only, or on a mobile device?',
      'Are we assuming any physical, sensory, or cognitive norms?',
      'Have we tested this with people with lived experience of exclusion?',
      'Is the design consistent and navigable at every step?',
      'Does our colour contrast meet WCAG AA standards?',
      'Have we provided text alternatives for all non-text content?',
      'Can users navigate this without time pressure or flashing elements?',
    ],
    Sustainability: [
      'Does this design minimise unnecessary data, devices, or carbon?',
      'What would this look like if it had to work for 10 years?',
      'Could we build this using existing parts instead of reinventing?',
      'Is this emotionally sustainable for the team and the user?',
      'What harm might we be exporting to another part of the system or planet?',
      'Are we accounting for lifecycle cost — not just development cost?',
      'How would this service adapt under climate stress or energy constraints?',
      'Can this solution scale without exhausting people or the planet?',
    ],
    'Design Justice': [
      'Who is included in the design process and who is excluded?',
      'Are we redistributing power or reinforcing existing hierarchies?',
      'Are we co-creating with those most impacted?',
      'Does this design shift control to those who need it most?',
      'Whose values are centered in this solution?',
      'What relationships are we nurturing through this design?',
      'Are we healing or harming?',
      'What stories are being told, and who gets to tell them?',
    ],
    'Trauma-Informed Design': [
      'Does this design promote safety, not just for users, but for the team too?',
      'Are we prioritizing choice, voice, and autonomy at every step?',
      'How are we addressing past harms — not just present needs?',
      'Are we making assumptions about resilience or healing?',
      'Have we created emotional escape hatches for intense interactions?',
      'Does this service feel predictable and trustworthy?',
      'Are we designing in ways that acknowledge systemic trauma?',
      'What healing practices are we integrating into the design process?',
    ],
  };

  const [questionData, setQuestionData] = useState({
    category: null,
    question:
      'Click the button above to receive a reflective systems-thinking prompt.',
    source: '',
  });

  const shuffleArray = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  const showRandomQuestion = () => {
    const categories = shuffleArray(Object.keys(questions));
    const category = categories[0];
    const questionList = shuffleArray(questions[category]);
    const question = questionList[0];
    const source = sources[category] || '';

    setQuestionData({category, question, source});
  };

  return (
    <div className="grow flex flex-col items-center justify-center bg-[#fdf9f3] px-4 text-center text-[#1e1e1e]">
      <Button
        className="text-xl md:text-2xl px-12 py-6 mb-10 rounded-full shadow-lg font-bold bg-[#1e1e1e] text-white hover:scale-105 transition-transform active:scale-100"
        onClick={showRandomQuestion}
        variant={'primary'}
        size={'lg'}
      >
        Ask the system
      </Button>

      <Card className="max-w-2xl w-full p-6 text-lg shadow-xl">
        <CardContent className="">
          {questionData.category && (
            <div className="text-sm text-gray-500 mb-2">
              🧠 {questionData.category}
            </div>
          )}
          <div>{questionData.question}</div>
          {questionData.source && (
            <div className="text-xs text-gray-400 mt-4">
              {questionData.source}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default OneGoodQuestion;
