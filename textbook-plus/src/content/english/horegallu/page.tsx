"use client";

import { Callout } from "@/components/content/Callout";
import { Expandable } from "@/components/content/Expandable";
import { KeyPoint } from "@/components/content/KeyPoint";
import { AuthorCard } from "@/components/content/AuthorCard";
import { CharacterSketch } from "@/components/content/CharacterSketch";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { CharacterComparison } from "@/components/content/CharacterComparison";

export default function HoregalluPage() {
  return (
    <div className="prose-custom max-w-none">
      {/* === Author === */}
      <div id="author">
        <AuthorCard name="Sudha Murty">
          <p>
            Sudha Murty (born 1950) is an Indian educator, author, and
            philanthropist. She is the chairperson of the Infosys Foundation
            and is known for her simple, accessible writing style that draws
            from real-life experiences and Indian culture. Her works often
            explore themes of kindness, empathy, and the value of human
            connections.
          </p>
        </AuthorCard>
      </div>

      {/* === Introduction === */}
      <h2 id="introduction" className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground">
        Introduction
      </h2>
      <p>
        Hot summer days remind the author of her childhood in a little village.
        There was a large banyan tree right in the middle of the village, and
        she would spend many hours playing under it during her holidays. The
        tree was like a massive umbrella with its branches providing much
        needed shade and succour.
      </p>
      <p>
        Travellers spent some time sitting under it and catching their breath
        before going on their way. To make them comfortable, there was a
        &lsquo;horegallu&rsquo; under the tree.
      </p>

      {/* === Summary (3-level slider) === */}
      <h2 id="summary" className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground">
        Summary
      </h2>
      <SummaryLevels
        quick={
          <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
            <li>
              &lsquo;Horegallu&rsquo; is a motivational story by Sudha Murty about the
              importance of taking rest and sharing our problems with others.
            </li>
            <li>
              A horegallu literally means &ldquo;a stone that can bear weight&rdquo; &mdash; a
              resting place for weary travellers.
            </li>
            <li>
              In any journey, everyone needs to stop, put down their burden,
              and rest before they can continue.
            </li>
            <li>
              The author&rsquo;s grandfather and her colleague Ratna both acted as
              human horegallus &mdash; good listeners who helped people regain their
              strength.
            </li>
          </ul>
        }
        standard={
          <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
            <li>
              &lsquo;Horegallu&rsquo; is a motivational story written by Sudha Murty. It
              tells us the importance of taking rest in the middle of our
              journey or sharing our problems with others.
            </li>
            <li>
              It is a short and simple anecdote that shows Sudha Murty&rsquo;s
              nostalgia for her childhood in a little village with a huge banyan
              tree in the middle.
            </li>
            <li>
              Under the banyan tree there was a horegallu &mdash; a large flat stone
              placed over two vertical ones, on which anyone could sit and rest,
              chat with fellow travellers, and drink cool water from earthen
              pots kept nearby.
            </li>
            <li>
              The author&rsquo;s grandfather, a retired school teacher, would spend
              hours near the horegallu chatting with travellers. He could only
              listen, but simply talking to him seemed to re-energise them for
              the road ahead.
            </li>
            <li>
              Grandfather told the author that a horegallu is essential in any
              journey. Everyone bears their burdens according to their
              capacities, but every once in a while they need to stop, lay down
              their burden, and rest.
            </li>
            <li>
              Later in life the author met Ratna, a cheerful colleague in Mumbai,
              who reminded her of her grandfather. Ratna spent her lunch breaks
              listening to the troubles of her co-workers. &ldquo;God has given me
              two ears to listen without judgement.&rdquo;
            </li>
            <li>
              Both grandfather and Ratna acted as human horegallus &mdash; they
              listened with empathy and helped others regain the strength to
              carry on.
            </li>
          </ul>
        }
        detailed={
          <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
            <li>
              &lsquo;Horegallu&rsquo; is a motivational story written by Sudha Murty. It
              tells us the importance of taking rest in the middle of our
              journey or sharing our problems with others.
            </li>
            <li>
              It is a short and simple anecdote that shows Sudha Murty&rsquo;s
              nostalgia for her childhood in a little village with a huge banyan
              tree in the middle.
            </li>
            <li>
              Under the banyan tree there was a horegallu &mdash; a large flat stone
              placed over two vertical ones, on which anyone could sit and rest,
              chat with fellow travellers, and drink cool water from earthen
              pots kept nearby.
            </li>
            <li>
              The author&rsquo;s grandfather, a retired school teacher, would spend
              hours near the horegallu chatting with travellers. He could only
              listen, but simply talking to him seemed to re-energise them for
              the road ahead.
            </li>
            <li>
              Grandfather told the author that a horegallu is essential in any
              journey. Everyone bears their burdens according to their
              capacities, but every once in a while they need to stop, lay down
              their burden, and rest &mdash; only then can they be refreshed enough to
              pick up the load once more.
            </li>
            <li>
              Later in life the author met Ratna, a cheerful colleague in Mumbai,
              who reminded her of her grandfather. Ratna spent her lunch breaks
              listening to the troubles of her co-workers.
            </li>
            <li>
              Ratna said: &ldquo;God has given me two ears to listen to others. I
              hear them out with sympathy and without any judgement. When a
              person in trouble finds an outlet for his worries, it relieves
              half his burden.&rdquo;
            </li>
            <li>
              Both the grandfather and Ratna acted as human horegallus &mdash; they
              listened with empathy and helped others regain the strength to
              carry on.
            </li>
            <li>
              The story encourages us to be someone&rsquo;s horegallu: a person who
              listens with compassion and creates healthy minds.
            </li>
          </ul>
        }
      />

      {/* === Character Sketch: Ratna === */}
      <h2 id="character-sketch-ratna" className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground">
        Character Sketch: Ratna
      </h2>
      <CharacterSketch name="Ratna">
        <p>
          Ratna is a character in the anecdote &lsquo;Horegallu&rsquo; written by Sudha
          Murty. She is a senior clerk who had been working in the company for
          nearly twenty-five years. She went about her repetitive, mundane work
          with an infectious cheerfulness.
        </p>
        <p>
          Every day during the lunch hour, she would sit with some person in
          one of the rooms and have long chats. When the author asked what
          they talked about, Ratna simply said, &ldquo;They share their troubles
          with me.&rdquo;
        </p>
        <p>
          Ratna could not solve all their problems, but she just listened. She
          considered sharing their conversations a sin, as they trusted her
          with their secrets. She never betrayed that confidence.
        </p>
        <p>
          She believed that God had given her two ears so that she could listen
          with sympathy and without passing any judgement. When a person finds
          an outlet for his worries, it relieves half his burden.
        </p>
        <p>
          People could open their minds before her and find relief. Soon after
          sharing their problems with her, they would gather the strength to
          move on with their journey. She acted as a horegallu &mdash; a place where
          weary travellers could lay down their weight and rest.
        </p>
      </CharacterSketch>

      {/* === Character Sketch: Grandfather === */}
      <h2 id="character-sketch-grandfather" className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground">
        Character Sketch: Grandfather
      </h2>
      <CharacterSketch name="Grandfather">
        <p>
          The author&rsquo;s grandfather was a retired school teacher. He would
          spend hours every day sitting under the banyan tree and talking to
          those resting near the horegallu.
        </p>
        <p>
          Most of the travellers were villagers taking a break from their work
          in the fields nearby. They had to walk long distances each day,
          carrying heavy burdens on their heads. Tired out by the heat, they
          would drink the cool water, wash their faces, and chat with
          grandfather about their daily lives and worries.
        </p>
        <p>
          Grandfather could only listen to them, but just talking to him seemed
          to refresh them for the journey. After some time, they would pick up
          their burdens with some ease and go on their way.
        </p>
        <p>
          He explained to the author that a horegallu is essential in any
          journey. Everyone carries their burdens according to their situations
          and capacities, but every once in a while they need to stop, put
          down that burden, and rest. Only then can they be refreshed enough to
          pick up the load once more.
        </p>
        <p>
          Grandfather acted as a human horegallu &mdash; through his patient listening,
          he helped the villagers regain their strength and carry on with their
          lives. He did this not for money or recognition, but because these
          acts of kindness gave him joy.
        </p>
      </CharacterSketch>

      {/* === Character Comparison === */}
      <h2 id="character-comparison" className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground">
        Character Comparison: Grandfather &amp; Ratna
      </h2>
      <CharacterComparison
        characters={["Grandfather", "Ratna"]}
        rows={[
          {
            label: "Role",
            values: [
              <p key="g-role">Retired school teacher</p>,
              <p key="r-role">Senior clerk (25 years in the company)</p>,
            ],
          },
          {
            label: "Setting",
            values: [
              <p key="g-set">Village, under the banyan tree near the horegallu</p>,
              <p key="r-set">Office, during lunch breaks in one of the rooms</p>,
            ],
          },
          {
            label: "Who they helped",
            values: [
              <p key="g-who">Villagers carrying heavy loads from the fields</p>,
              <p key="r-who">Co-workers carrying worries and stress</p>,
            ],
          },
          {
            label: "How they listened",
            values: [
              <p key="g-how">Sat under the tree and chatted with travellers; mostly listened to their daily concerns</p>,
              <p key="r-how">Sat with one person each lunch hour; mostly listened to their problems without trying to solve them</p>,
            ],
          },
          {
            label: "Philosophy",
            values: [
              <p key="g-phil">&ldquo;A horegallu is essential in any journey. We all carry our burdens according to our situations and capacities. But every once in a while, we need to stop, put down that burden and rest.&rdquo;</p>,
              <p key="r-phil">&ldquo;God has given me two ears to listen to others. I hear them out with sympathy and without any judgement. When a person finds an outlet for his worries, it relieves half his burden.&rdquo;</p>,
            ],
          },
          {
            label: "Confidentiality",
            values: [
              <p key="g-conf">Villagers naturally trusted him as a respected elder; their conversations stayed private</p>,
              <p key="r-conf">&ldquo;Not even in my dreams. I consider that to be the worst kind of betrayal.&rdquo; She never disclosed what was shared in confidence</p>,
            ],
          },
          {
            label: "Effect on others",
            values: [
              <p key="g-eff">Travellers felt refreshed and picked up their burdens with ease</p>,
              <p key="r-eff">Colleagues found relief and gathered strength to carry on with their journey</p>,
            ],
          },
          {
            label: "Motivation",
            values: [
              <p key="g-mot">No money or recognition; these acts of kindness gave him joy</p>,
              <p key="r-mot">No reward sought; simply listened and provided a safe outlet for worries</p>,
            ],
          },
          {
            label: "Shared trait",
            values: [
              <p key="g-shared" className="font-semibold">Both were human horegallus &mdash; good listeners who provided empathy and helped people regain their strength through patient listening</p>,
              <p key="r-shared" className="font-semibold">Both were human horegallus &mdash; good listeners who provided empathy and helped people regain their strength through patient listening</p>,
            ],
          },
        ]}
      />

      {/* === Symbolism & Themes === */}
      <h2 id="symbolism-themes" className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground">
        Symbolism &amp; Themes
      </h2>

      <Callout type="important">
        <p>
          The <em>horegallu</em> is not just a physical stone bench. It is a
          metaphor for empathy, support, and the power of listening in human
          relationships.
        </p>
      </Callout>

      <h3 id="the-burden" className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground">
        The Symbolism of &lsquo;Burden&rsquo;
      </h3>
      <p>
        The word &lsquo;burden&rsquo; is used both literally and symbolically. The
        villagers literally carry heavy loads on their heads, but the word
        also represents the emotional and psychological worries that people
        carry through life. The horegallu offers a place to set down both
        kinds of burden.
      </p>

      <h3 id="power-of-listening" className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground">
        The Power of Listening
      </h3>
      <p>
        Both grandfather and Ratna are good listeners. Neither tries to solve
        problems or offer advice &mdash; they simply listen with sympathy and without
        judgement. The story shows that listening itself is a powerful form of
        social service. It provides psychological relief and creates healthy
        minds.
      </p>

      <h3 id="human-horegallus" className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground">
        Human Horegallus
      </h3>
      <p>
        The story draws a parallel between grandfather and Ratna. Both acted
        as &lsquo;human horegallus&rsquo; &mdash; offering empathy and patience without
        expecting any reward. The author concludes that the world needs many
        more such people who listen with compassion.
      </p>

      <Expandable title="Infectious Cheerfulness">
        <p>
          The expression &lsquo;infectious cheerfulness&rsquo; describes Ratna&rsquo;s
          positive attitude that naturally affected everyone around her. Even
          though her work was repetitive and mundane, she approached it with
          joy &mdash; and that joy spread to the people who came to her for support.
        </p>
      </Expandable>

      {/* === Key Takeaway === */}
      <KeyPoint title="Key Takeaway">
        The horegallu is a metaphor for empathy and support in human
        relationships. Everyone carries burdens, and sometimes they just need
        someone to listen. Good listeners &mdash; like the author&rsquo;s grandfather and
        Ratna &mdash; act as human horegallus, providing the psychological relief
        and emotional support that people need to regain their strength and
        carry on with their journey.
      </KeyPoint>
    </div>
  );
}