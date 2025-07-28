'use client';

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';

const OneGoodQuestion = () => {
  const getCategoryEmoji = (category) => {
    const emojiMap = {
      'Design Council Systemic Framework': '🌐',
      'Government Digital Service (GDS) Framework': '💻',
      'WCAG 2 Accessibility Standards': '♿',
      'Digital Scotland Service Standard (DSSS)': '🏴',
      'Welsh Future Generations Framework': '🐉',
      'Placemaking Wales Guide': '🏡',
      'Scottish Place Principle': '🏴‍☠️',
      'Sustainable Design Frameworks': '🌱',
      'Trauma-Informed Design': '🧠',
      'Design Justice Principles': '⚖️',
    };
    return emojiMap[category] || '📋';
  };

  const questions = {
    'Design Council Systemic Framework': [
      'What interdependencies exist between the people, places, and systems involved?',
      'Have we fully explored the root causes, not just the symptoms?',
      'How might we engage with those most affected by the problem in the design process?',
      'Where are the hidden leverage points for systemic change?',
      'How does this problem connect to wider societal patterns?',
      'What unintended consequences could emerge from our intervention?',
    ],
    'Government Digital Service (GDS) Framework': [
      'Are we starting with user needs, not government needs?',
      'Is our service simple enough for everyone to use the first time?',
      'Have we shown the thing we\'re building early and often?',
      'Are we using agile methods to iterate quickly?',
      'Are we building the right thing before building it right?',
      'Are we continuously learning from real user behavior?',
    ],
    'WCAG 2 Accessibility Standards': [
      'Can all users, regardless of ability, perceive and understand this design?',
      'Is our interface operable without a mouse or touchscreen?',
      'Have we used consistent navigation and predictable interactions?',
      'Are we avoiding sensory or color-only communication cues?',
      'Is content adaptable to different formats or devices?',
      'Have we tested accessibility with users who rely on assistive tech?',
    ],
    'Digital Scotland Service Standard (DSSS)': [
      'How does this design meet the needs of diverse Scottish users?',
      'Are we working in the open and iterating based on feedback?',
      'Are we building on existing good practice and avoiding duplication?',
      'How have we built inclusion into every stage of the process?',
      'Are we publishing work openly to support wider use and improvement?',
      'Are we supporting long-term public benefit, not just short-term gains?',
    ],
    'Welsh Future Generations Framework': [
      'Does this decision support long-term sustainability?',
      'How are we involving people and communities meaningfully?',
      'Have we considered the impact on well-being in Wales now and in the future?',
      'Does our design serve current and future generations equally?',
      'Are we addressing all seven well-being goals?',
      'Are we working across silos in collaborative ways?',
    ],
    'Placemaking Wales Guide': [
      'Is this place designed with and for the local community?',
      'How does this design create a sense of belonging and identity?',
      'Are we considering both function and beauty in the space?',
      'How do public spaces reflect shared values and heritage?',
      'Is the place welcoming, safe, and accessible for everyone?',
      'Are we nurturing stewardship and care for this place over time?',
    ],
    'Scottish Place Principle': [
      'Are all stakeholders collaborating with shared purpose in this place?',
      'Have we aligned with local ambitions and community aspirations?',
      'How does this design contribute to inclusive economic and social outcomes?',
      'Are we designing for joined-up service delivery and shared outcomes?',
      'Are we strengthening community voice and local decision-making?',
      'Does the approach respect the distinctiveness of place and culture?',
    ],
    'Sustainable Design Frameworks': [
      'What environmental impact does this design have across its lifecycle?',
      'Are we using resources wisely and regeneratively?',
      'Is this design resilient to future ecological and societal changes?',
      'Have we minimized waste and maximized circularity?',
      'Are we supporting planetary health as part of human health?',
      'Is this design aligned with global climate and biodiversity targets?',
    ],
    'Trauma-Informed Design': [
      'Does this environment promote emotional safety and autonomy?',
      'How are we accounting for people with lived experiences of trauma?',
      'Are we building trust, choice, and empowerment into the service?',
      'Is the design sensitive to potential triggers in the environment?',
      'How are staff trained to recognize and respond to trauma?',
      'Are we co-designing with those who have experienced trauma directly?',
    ],
    'Design Justice Principles': [
      'Who is missing from the design table, and why?',
      'How does this design redistribute power or reinforce injustice?',
      'Are we valuing collective wisdom over technocratic expertise?',
      'Whose voices are centered, and whose are marginalized?',
      'Is our process accountable to the communities it affects?',
      'Are we designing for liberation, not assimilation?',
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
    const source = '';

    setQuestionData({category, question, source});
  };

  return (
    <div className="grow flex flex-col items-center justify-center bg-[#fdf9f3] px-4 text-center text-[#1e1e1e]">
      <Button
        className="text-xl md:text-2xl px-12 py-6 mb-10 rounded-full shadow-lg font-bold text-white hover:scale-105 transition-transform active:scale-100"
        style={{
          background: 'radial-gradient(circle, #1e40af 30%, #059669 50%, #1e40af 100%)'
        }}
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
              {getCategoryEmoji(questionData.category)} {questionData.category}
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
