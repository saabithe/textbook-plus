"use client";

import { Expandable } from "@/components/content/Expandable";
import { KeyPoint } from "@/components/content/KeyPoint";

export default function HoregalluPage() {
  return (
    <div className="prose-custom max-w-none">
      {/* === Section 1: Introduction === */}
      <h2 id="introduction" className="text-2xl font-bold tracking-tight mt-12 mb-4 scroll-mt-24 text-foreground">
        Introduction
      </h2>
      <p>
        &ldquo;Horegallu&rdquo; is a motivational story written by Sudha Murty, a famous
        Indian writer and philanthropist. The story is a short, simple anecdote
        that carries a deep message about the importance of taking rest in the
        middle of our journey and sharing our problems with others.
      </p>
      <p>
        The narrative is also a nostalgic reflection of the author&rsquo;s childhood
        days in a small village. Hot summer days remind her of a huge banyan
        tree that stood in the middle of the village, providing shade like an
        umbrella for everyone who gathered beneath it.
      </p>

      {/* === Section 2: The Horegallu === */}
      <h2 id="the-horegallu" className="text-2xl font-bold tracking-tight mt-12 mb-4 scroll-mt-24 text-foreground">
        The Horegallu
      </h2>
      <p>
        Under the banyan tree there was a <em>horegallu</em>. The word literally
        means &ldquo;a stone that can bear weight.&rdquo; It was a large, flat stone placed
        horizontally over two vertical ones. Travellers and villagers would rest
        on it, sit down, chat, exchange news, and drink cool water from earthen
        pots kept nearby before continuing their journey.
      </p>
      <p>
        This horegallu held special memories for the author. It was
        inseparably linked to her grandfather, a retired school teacher who
        would spend hours sitting near the stone, chatting with the travellers
        who rested under the banyan tree.
      </p>

      {/* === Section 3: Grandfather's Wisdom === */}
      <h2 id="grandfathers-wisdom" className="text-2xl font-bold tracking-tight mt-12 mb-4 scroll-mt-24 text-foreground">
        Grandfather&rsquo;s Wisdom
      </h2>
      <p>
        The majority of those who stopped at the horegallu were villagers
        enjoying a break from working in the neighbouring fields. Their topic
        of discussion was always their daily lives and concerns. Grandfather
        could only listen, yet simply talking to him seemed to re-energise them
        for the road ahead. They would eventually pick up their burdens with
        ease and continue on their path.
      </p>
      <p>
        When the author was tired of playing, she would sit next to Grandfather
        and listen to his conversations. Grandfather once explained to her that
        a horegallu is vital in any journey. Everyone bears their burdens in
        accordance with their circumstances and abilities, but every now and
        then they need to take a break, lay down their burdens, and rest.
        Only then will they be able to resume their responsibilities. The
        horegallu offers that chance — it aids in the recovery of people&rsquo;s
        strength.
      </p>

      {/* === Section 4: Ratna — A Human Horegallu === */}
      <h2 id="ratna" className="text-2xl font-bold tracking-tight mt-12 mb-4 scroll-mt-24 text-foreground">
        Ratna &mdash; A Human Horegallu
      </h2>
      <p>
        Later in life, the author went to work in Mumbai. There she came across
        a colleague named Ratna, who reminded her of her grandfather and the
        horegallu. Ratna was a cheerful woman who shared the troubles of her
        co-workers and spread relief into everyone&rsquo;s lives.
      </p>
      <p>
        During lunch breaks, Ratna would sit with any of the workers and listen
        to their problems. She knew she could not solve all their problems, but
        she just listened. According to Ratna, a person can be relieved from
        the burdens of life when they find an outlet for those sorrows. She
        added that God had given her two ears so that she could listen with
        sympathy and without passing any judgement.
      </p>
      <p>
        People could open their minds before her and find relief. She never
        disclosed anything that was shared in confidence by her co-workers.
        She considered sharing their conversations a sin, as they trusted her
        with their secrets and she would never betray that trust. Soon after
        sharing their problems with her, they would gather the strength to
        move on with their journey.
      </p>

      {/* === Section 5: The Deeper Message === */}
      <h2 id="deeper-message" className="text-2xl font-bold tracking-tight mt-12 mb-4 scroll-mt-24 text-foreground">
        The Deeper Message
      </h2>
      <p>
        According to the author, both her grandfather and Ratna were doing the
        same thing. Without charging money, both of them were engaged in social
        service. They acted as horegallus for others — helping people unload
        their burdens without taking any reward. Both of them were good
        listeners who created healthy minds.
      </p>
      <p>
        The horegallu is not just a physical stone bench. It is a metaphor for
        the support systems that are vital for maintaining mental health and
        resilience. The story encourages the practice of empathy and
        supportiveness in everyday life — to be someone&rsquo;s horegallu, a place
        where they can rest, share their burdens, and find the strength to
        continue.
      </p>

      {/* === Key Takeaway === */}
      <KeyPoint title="Key Takeaway">
        Everyone carries burdens according to their circumstances, and
        sometimes they just need someone to listen. Good listeners — like the
        author&rsquo;s grandfather and Ratna — act as human horegallus, providing
        the psychological relief and emotional support that people need to
        regain their strength and carry on.
      </KeyPoint>

      {/* === Author Context === */}
      <Expandable title="Author Context">
        <p>
          <strong>Sudha Murty</strong> (born 1950) is an Indian educator, author,
          and philanthropist. She is the chairperson of the Infosys Foundation
          and is known for her simple, accessible writing style that draws from
          real-life experiences and Indian culture.
        </p>
        <p>
          Her works often explore themes of kindness, empathy, and the value of
          human connections. &ldquo;Horegallu&rdquo; is a characteristic example of her
          storytelling — a short, seemingly simple narrative that carries a
          profound message about compassion and the power of listening.
        </p>
      </Expandable>
    </div>
  );
}