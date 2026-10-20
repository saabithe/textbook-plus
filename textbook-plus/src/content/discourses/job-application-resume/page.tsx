import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";

/** A fill-in field inside the job application and resume frames. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

export default function JobApplicationResumeContent() {
  return (
    <>
      <Callout type="note">
        A job application is two documents, each on a fresh page — the covering
        <strong> letter</strong> asks for the post and refers to the
        advertisement, and the <strong>resume</strong> sets out the
        qualifications, experience and skills behind the request.
      </Callout>

      <h2>Part A — Job Application Letter</h2>
      <p>
        Use this frame for any post — fill in every <Slot>[...]</Slot> field,
        and keep the letter to one page.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            Fill-in frame — copy this structure
          </span>
        </div>

        <div className="px-5 py-4">
          <h3 className="!mt-0">
            <Slot>[Your Name]</Slot>
          </h3>

          <p>
            <Slot>[Your Name]</Slot>
            <br />
            <Slot>[Your House Name / Street]</Slot>
            <br />
            <Slot>[Place, PIN Code]</Slot>
          </p>
          <p>
            <Slot>[Date]</Slot>
          </p>
          <p>
            <Slot>[Recipient&rsquo;s Name / Designation]</Slot>
            <br />
            <Slot>[Company / Organisation Name]</Slot>
            <br />
            <Slot>[Address]</Slot>
          </p>

          <p>Dear Sir / Madam,</p>

          <p>
            <strong>
              Subject: Application for the Post of <Slot>[Job Title]</Slot>
            </strong>
          </p>

          <p>
            With reference to your advertisement in{" "}
            <Slot>[Newspaper / Website Name]</Slot> dated <Slot>[Date]</Slot>, I
            wish to apply for the post of <Slot>[Job Title]</Slot> in your
            esteemed organisation.
          </p>
          <p>
            I have completed <Slot>[Educational Qualification]</Slot> from{" "}
            <Slot>[Institution / University]</Slot>. I also possess{" "}
            <Slot>[relevant training / skills / experience]</Slot>. Furthermore,{" "}
            <Slot>
              [mention relevant achievements, projects, or qualities that match
              the requirements of the post]
            </Slot>
            . My qualifications and experience make me a suitable candidate for
            this position.
          </p>
          <p>
            If selected, I assure you that I will discharge my duties sincerely
            and to the best of my ability. I have enclosed my resume for your
            kind consideration. I would be grateful for an opportunity to attend
            an interview.
          </p>

          <p>Yours sincerely,</p>
          <p>
            <Slot>[Signature, if required]</Slot>
            <br />
            <Slot>[Your Full Name]</Slot>
          </p>

          <p>
            <strong>Enclosure:</strong> Resume
          </p>
        </div>
      </div>

      <h2>Part B — Resume / Curriculum Vitae</h2>
      <p>
        The resume is written on a fresh page, in the same order — personal
        details first, then the sections that prove you fit the post.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            Fill-in frame — copy this structure
          </span>
        </div>

        <div className="px-5 py-4">
          <h3 className="!mt-0">
            <Slot>[YOUR FULL NAME]</Slot>
          </h3>

          <p>
            <strong>Address:</strong> <Slot>[Full Address]</Slot>
            <br />
            <strong>Email ID:</strong> <Slot>[Email Address]</Slot>
            <br />
            <strong>Phone No.:</strong> <Slot>[Phone Number]</Slot>
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            I. Career Objective
          </h4>
          <p>
            To work as a <Slot>[Job Title]</Slot> in{" "}
            <Slot>[organisation / field]</Slot>, where I can apply my{" "}
            <Slot>[relevant skills and knowledge]</Slot> and contribute
            effectively to the organisation.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            II. Educational Qualifications
          </h4>
          <ul>
            <li>
              <Slot>[Year / Duration]</Slot>: <Slot>[Qualification]</Slot> —{" "}
              <Slot>[Institution / University]</Slot> —{" "}
              <Slot>[Marks / Grade, if provided]</Slot>
            </li>
            <li>
              <Slot>[Year / Duration]</Slot>: <Slot>[Qualification]</Slot> —{" "}
              <Slot>[Institution / University]</Slot> —{" "}
              <Slot>[Marks / Grade, if provided]</Slot>
            </li>
            <li>
              <Slot>[Year]</Slot>: <Slot>[School Qualification]</Slot> —{" "}
              <Slot>[Board / School]</Slot> —{" "}
              <Slot>[Marks / Grade, if provided]</Slot>
            </li>
          </ul>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            III. Work Experience
          </h4>
          <ul>
            <li>
              <Slot>[Year–Year]</Slot>: <Slot>[Job Title]</Slot> —{" "}
              <Slot>[Organisation / Institution]</Slot>.{" "}
              <Slot>
                [Briefly state responsibilities or relevant experience.]
              </Slot>
            </li>
          </ul>
          <div className="text-sm italic text-muted-foreground">
            Add other positions in reverse chronological order, if appropriate.
          </div>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            IV. Activities
          </h4>
          <ul>
            <li>
              <Slot>
                [Memberships, voluntary service, leadership roles, or relevant
                extracurricular activities.]
              </Slot>
            </li>
          </ul>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            V. Achievements and Awards
          </h4>
          <ul>
            <li>
              <Slot>
                [Relevant awards, academic achievements, recognitions, or
                notable accomplishments.]
              </Slot>
            </li>
          </ul>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            VI. Skills
          </h4>
          <ul>
            <li>
              <Slot>[Technical / professional skills]</Slot>
            </li>
            <li>
              <Slot>[Communication / teamwork / leadership skills]</Slot>
            </li>
            <li>
              <Slot>[Other skills relevant to the job]</Slot>
            </li>
          </ul>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            VII. Languages Known
          </h4>
          <p>
            <Slot>[Language 1]</Slot>, <Slot>[Language 2]</Slot>,{" "}
            <Slot>[Language 3]</Slot>
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            VIII. Interests
          </h4>
          <p>
            <Slot>[Relevant hobbies or interests, if required.]</Slot>
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            IX. References — If Required
          </h4>
          <p>
            <Slot>
              [Name, Designation, Organisation, and Contact Details]
            </Slot>
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            Declaration — If Required
          </h4>
          <p>
            I hereby declare that the information furnished above is true and
            correct to the best of my knowledge.
          </p>
          <p>
            <strong>Place:</strong> <Slot>[Place]</Slot>
            <br />
            <strong>Date:</strong> <Slot>[Date]</Slot>
            <br />
            <strong>Signature:</strong> <Slot>[Your Name]</Slot>
          </p>
        </div>
      </div>

      <h2>Guidelines</h2>
      <ul>
        <li>Write the sender&rsquo;s address first.</li>
        <li>Write the receiver&rsquo;s address next.</li>
        <li>Then salutation followed by the sub. line.</li>
        <li>
          First paragraph should tell the purpose of application and should
          refer newspaper in which advertisement for the post was featured.
        </li>
        <li>
          Second paragraph should focus on what the employer wants to know. Make
          sure necessary details are included.
        </li>
        <li>
          In the third paragraph you may give assurance you are fit for the job
          and can do it well.
        </li>
        <li>Limit the letter to one page.</li>
        <li>
          Put the signature in the bottom right with complimentary close —
          Yours truly / Yours sincerely followed by a punctuation
          &lsquo;comma&rsquo;.
        </li>
        <li>Date can be written in the bottom or in between the addresses.</li>
        <li>
          It is advised to start the application letter in a fresh page. Resume
          also be written on a fresh page.
        </li>
      </ul>

      <KeyPoint>
        The letter is one page of courtesy — reference to the advertisement,
        what you offer, and the assurance that you can do the job. The resume is
        the evidence behind every claim, in the order the employer reads it:
        objective, qualifications, experience, activities, achievements, skills.
      </KeyPoint>
    </>
  );
}
