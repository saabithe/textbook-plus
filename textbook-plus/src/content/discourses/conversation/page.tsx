import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";

/** A fill-in field inside a phrase. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

/** Renders a phrase, turning every [placeholder] into a fill-in slot. */
function Phrase({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <Slot key={index}>{part}</Slot>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}

function PhraseList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <Phrase text={item} />
        </li>
      ))}
    </ul>
  );
}

/** The shape of the conversation — the map to the phrase banks below. */
const QUICK_FORMULA = [
  "Opening",
  "Topic",
  "Questions and Answers",
  "Opinions / Reasons",
  "Suggestions / Reactions",
  "Decision or Understanding",
  "Closing",
];

interface PhraseSection {
  title: string;
  groups: { label?: string; items: string[] }[];
}

const SECTIONS: PhraseSection[] = [
  {
    title: "I. Opening the Conversation",
    groups: [
      {
        label: "Greeting",
        items: [
          "Hello! How are you?",
          "Good morning! How have you been?",
          "Hi! It's nice to see you.",
          "Excuse me, may I speak to you for a moment?",
          "Do you have a minute? I'd like to talk to you about something.",
        ],
      },
      {
        label: "Starting the Topic",
        items: [
          "I wanted to talk to you about [topic].",
          "Have you heard about [topic / event]?",
          "I'd like to know your opinion about [topic].",
          "There's something I'd like to discuss with you.",
          "I was wondering if you could help me with something.",
        ],
      },
    ],
  },
  {
    title: "II. Asking Questions and Seeking Information",
    groups: [
      {
        items: [
          "What do you think about [topic]?",
          "Could you tell me more about it?",
          "What exactly do you mean?",
          "Could you explain that to me?",
          "Why do you think so?",
          "What happened next?",
          "How did you manage to do that?",
          "What would you suggest?",
          "Could you give me an example?",
          "Is there anything else I should know?",
        ],
      },
    ],
  },
  {
    title: "III. Responding and Giving Information",
    groups: [
      {
        items: [
          "Well, I think [opinion / response].",
          "As far as I know, [information].",
          "Actually, [explanation / clarification].",
          "The main reason is that [reason].",
          "Let me explain.",
          "From my point of view, [opinion].",
          "As I see it, [viewpoint].",
          "What I mean is that [clarification].",
          "To be specific, [detail].",
          "For example, [example].",
        ],
      },
    ],
  },
  {
    title: "IV. Expressing Opinions and Feelings",
    groups: [
      {
        items: [
          "I think that [opinion].",
          "In my opinion, [viewpoint].",
          "I strongly believe that [opinion].",
          "I feel that [personal response].",
          "I'm glad to hear that.",
          "That's really interesting!",
          "I'm sorry to hear that.",
          "I'm concerned about [issue].",
          "I'm happy that [situation].",
          "I understand how you feel.",
        ],
      },
    ],
  },
  {
    title: "V. Agreeing and Disagreeing",
    groups: [
      {
        label: "Agreement",
        items: [
          "I completely agree with you.",
          "You're absolutely right.",
          "That's a good point.",
          "I think so, too.",
          "I couldn't agree more.",
          "Exactly! That's what I think.",
        ],
      },
      {
        label: "Disagreement",
        items: [
          "I see your point, but [alternative view].",
          "I understand what you mean, but I think [opinion].",
          "I'm afraid I don't completely agree.",
          "I have a slightly different opinion.",
          "That may be true, but we should also consider [point].",
          "I respect your opinion, although I think [alternative].",
        ],
      },
    ],
  },
  {
    title: "VI. Suggesting and Giving Advice",
    groups: [
      {
        items: [
          "Why don't we [suggested action]?",
          "We could try [solution].",
          "I think we should [action].",
          "Have you considered [suggestion]?",
          "It might be better to [action].",
          "If I were you, I would [advice].",
          "How about [idea]?",
          "Perhaps we could [possible solution].",
          "The best thing to do would be to [action].",
          "Let's see what we can do about it.",
        ],
      },
    ],
  },
  {
    title: "VII. Responding to Suggestions",
    groups: [
      {
        label: "Accepting",
        items: [
          "That's a great idea!",
          "That sounds good to me.",
          "I think that would work.",
          "Yes, let's do that.",
          "Thank you for the suggestion.",
        ],
      },
      {
        label: "Rejecting or Hesitating Politely",
        items: [
          "I'm not sure that's the best option.",
          "That sounds interesting, but [reason].",
          "I appreciate the suggestion, but [alternative].",
          "Perhaps we should consider another option.",
          "Let me think about it.",
        ],
      },
    ],
  },
  {
    title: "VIII. Clarifying and Continuing the Conversation",
    groups: [
      {
        items: [
          "Could you say that again, please?",
          "Could you be a little more specific?",
          "Let me make sure I understand you correctly.",
          "So, what you're saying is that [restate idea], right?",
          "That's an interesting point. Tell me more.",
          "I see what you mean.",
          "By the way, [related topic].",
          "Coming back to what we were discussing, [topic].",
          "Before we move on, I'd like to ask [question].",
          "That's a good question.",
        ],
      },
    ],
  },
  {
    title: "IX. Thanking, Apologising and Responding Politely",
    groups: [
      {
        label: "Thanking",
        items: [
          "Thank you for your help.",
          "I really appreciate it.",
          "Thanks for taking the time to explain.",
          "That's very kind of you.",
        ],
      },
      {
        label: "Responding to Thanks",
        items: [
          "You're welcome.",
          "It's my pleasure.",
          "No problem at all.",
          "I'm happy to help.",
        ],
      },
      {
        label: "Apologising",
        items: [
          "I'm sorry about that.",
          "I apologise for [mistake / inconvenience].",
          "I didn't mean to [action].",
          "I hope you can understand.",
        ],
      },
      {
        label: "Responding to an Apology",
        items: [
          "That's all right.",
          "Don't worry about it.",
          "It's okay. These things happen.",
          "I understand.",
        ],
      },
    ],
  },
  {
    title: "X. Reaching an Understanding or Decision",
    groups: [
      {
        items: [
          "So, what should we do next?",
          "I think we've found a solution.",
          "That seems like a reasonable decision.",
          "Let's agree to [action / plan].",
          "We should take this one step at a time.",
          "I think we both understand each other's point now.",
          "Let's see how things work out.",
          "I'll keep that in mind.",
          "I'll get back to you about it.",
          "All right, let's proceed with that plan.",
        ],
      },
    ],
  },
  {
    title: "XI. Ending the Conversation",
    groups: [
      {
        items: [
          "It was nice talking to you.",
          "Thank you for your time.",
          "I'm glad we had this conversation.",
          "Let's talk about this again sometime.",
          "I'll see you later.",
          "Take care!",
          "Have a nice day.",
          "Goodbye! See you soon.",
          "I hope everything works out well.",
          "Let's keep in touch.",
        ],
      },
    ],
  },
];

const USAGE_RULES = [
  "Select only the phrases that fit the given situation.",
  "Replace every bracketed placeholder with relevant information.",
  "Adapt the language to the speakers: formal, polite, friendly, or casual.",
  "Use different phrases naturally; avoid repeating the same expression.",
  "Make each reply connect logically to the previous line.",
  "Do not force every section into one conversation. Choose only what the context requires.",
  "For exam answers, prioritise the question's hints, characters, and situation over memorising phrases.",
];

export default function ConversationContent() {
  return (
    <>
      <Callout type="note">
        A conversation is a dialogue built to a shape — it opens, names a topic,
        asks and answers, weighs opinions, reacts, agrees on something and
        closes. The phrases below are the words for each of those moves; pick
        the ones the situation needs.
      </Callout>

      <h2>Quick Formula</h2>
      <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {QUICK_FORMULA.map((step, index) => (
          <div
            key={step}
            className="rounded-2xl border border-border/60 bg-card px-4 py-3 shadow-sm"
          >
            <p className="text-sm font-bold tracking-tight text-foreground">
              {index + 1}. {step}
            </p>
          </div>
        ))}
      </div>

      {SECTIONS.map((section) => (
        <div key={section.title}>
          <h2>{section.title}</h2>
          {section.groups.map((group, index) => (
            <div key={group.label ?? index}>
              {group.label && <h3>{group.label}</h3>}
              <PhraseList items={group.items} />
            </div>
          ))}
        </div>
      ))}

      <h2>Usage Rules</h2>
      <ol>
        {USAGE_RULES.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ol>

      <KeyPoint>
        The phrases are the vocabulary, not the answer. Follow the formula —
        open, raise the topic, ask and answer, give opinions and reasons, react,
        reach a decision, close — and use only the moves the situation calls
        for.
      </KeyPoint>
    </>
  );
}
