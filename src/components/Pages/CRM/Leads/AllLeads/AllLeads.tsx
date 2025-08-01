"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { PanelLeft } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

export default function AllLeads() {
  const { toggleAutomateSidebar } = useSidebar();

  return (
    <div className="flex h-full w-full overflow-hidden rounded-lg border bg-background text-foreground">
      <div className="flex flex-1 flex-col w-full">
        {/* Header */}
        <div className="flex items-center justify-between border-b h-[60px] p-4">
          <div className="flex items-center gap-4">
            <PanelLeft
              onClick={toggleAutomateSidebar}
              className="h-4 w-4 cursor-pointer text-muted-foreground"
            />
            <h2 className="text-base font-bold">All Leads</h2>
          </div>
        </div>

        {/* Body */}
        <ScrollArea className="flex-1 h-0 p-4 w-full overflow-auto">
          <div className="prose max-w-none min-w-[900px] ml-8">
            <p>
              When the 80/20 Rule Fails: The Downside of Being Effective written
              by James Clear Life Lessons Productivity Audrey Hepburn was an
              icon. Rising to fame in the 1950s, she was one of the greatest
              actresses of her era. In 1953, Hepburn became the first actress to
              win an Academy Award, a Golden Globe Award, and a BAFTA Award for
              a single performance: her leading role in the romantic comedy
              Roman Holiday. Even today, over half a century later, she remains
              one of just 15 people to earn an “EGOT” by winning all four major
              entertainment awards: Emmy, Grammy, Oscar, and Tony. By the 1960s,
              she was averaging more than one new film per year and, by
              everyone’s estimation, she was on a trajectory to be a movie star
              for decades to come. But then something funny happened: she
              stopped acting. Despite being in her 30s and at the height of her
              popularity, Hepburn basically stopped appearing in films after
              1967. She would perform in television shows or movies just five
              times during the rest of her life. Instead, she switched careers.
              She spent the next 25 years working tirelessly for UNICEF, the arm
              of the United Nations that provides food and healthcare to
              children in war-torn countries. She performed volunteer work
              throughout Africa, South America, and Asia. Hepburn’s first act
              was on stage. Her next act was one of service. In December 1992,
              she was awarded the Presidential Medal of Freedom for her efforts,
              which is the highest civilian award of the United States. We will
              return to her story in a moment. Audrey Hepburn in 1956. Photo by
              Bud Fraker. Efficient vs. Effective You get one, precious life.
              How do you decide the best way to spend your time? Productivity
              gurus will often suggest that you focus on being effective rather
              than being efficient. Efficiency is about getting more things
              done. Effectiveness is about getting the right things done. Peter
              Drucker, the well-known management consultant, once encapsulated
              the idea by writing, “There is nothing so useless as doing
              efficiently that which should not be done at all.” In other words,
              making progress is not just about being productive. It’s about
              being productive on the right things. But how do you decide what
              the “right things” are? One of the most trusted approaches is to
              use the Pareto Principle, which is more commonly known as the
              80/20 Rule. The 80/20 Rule states that, in any particular domain,
              a small number of things account for the majority of the results.
              For example, 80 percent of the land in Italy is owned by 20
              percent of the people. Or, 75 percent of NBA championships are won
              by 20 percent of the teams. The numbers don’t have to add up to
              100. The point is that the majority of the results are driven by a
              minority of causes. The Upside of the 80/20 Rule When applied to
              your life and work, the 80/20 Rule can help you separate “the
              vital few from the trivial many.” For example, business owners may
              discover the majority of revenue comes from a handful of important
              clients. The 80/20 Rule would recommend that the most effective
              course of action would be to focus exclusively on serving these
              clients (and on finding others like them) and either stop serving
              others or let the majority of customers gradually fade away
              because they account for a small portion of the bottom line. This
              same strategy can be useful if you practice inversion and look at
              the sources of your problems. You may find that the majority of
              your complaints come from a handful of problem clients. The 80/20
              Rule would suggest that you can clear out your backlog of customer
              service requests by firing these clients. The 80/20 Rule is like a
              form of judo for life and work. By finding precisely the right
              area to apply pressure, you can get more results with less effort.
              It’s a great strategy, and I have used it many times. But there is
              a downside to this approach, as well, and it is often overlooked.
              To understand this pitfall, we return to Audrey Hepburn. The
              Downside of the 80/20 Rule Imagine it is 1967. Audrey Hepburn is
              in the prime of her career and trying to decide how to spend her
              time. If she uses the 80/20 Rule as part of her decision-making
              process, she will discover a clear answer: do more romantic
              comedies. Many of Hepburn’s best films were romantic comedies like
              Roman Holiday, Sabrina, Breakfast at Tiffany’s, and Charade. She
              starred in these four films between 1953 and 1963; by 1967, she
              was due for another one. They attracted large audiences, earned
              her awards, and were an obvious path to greater fame and fortune.
              Romantic comedies were effective for Audrey Hepburn. In fact, even
              if we take into account her desire to help children through
              UNICEF, an 80/20 analysis might have revealed that starring in
              more romantic comedies was still the best option because she could
              have maximized her earning power and donated the additional
              earnings to UNICEF. Of course, that’s all well and good if she
              wanted to continue acting. But she didn’t want to be an actress.
              She wanted to serve. And no reasonable analysis of the highest and
              best use of her time in 1967 would have suggested that
              volunteering for UNICEF was the most effective use of her time.
              This is the downside of the 80/20 Rule: A new path will never look
              like the most effective option in the beginning. Optimizing for
              Your Past or Your Future Here’s another example: Jeff Bezos, the
              founder of Amazon, worked on Wall Street and climbed the corporate
              ladder to become senior vice-president of a hedge fund before
              leaving it all in 1994 to start the company. If Bezos had applied
              the 80/20 Rule in 1993 in an attempt to discover the most
              effective areas to focus on in his career, it is virtually
              impossible to imagine that founding an internet company would have
              been on the list. At that point in time, there is no doubt that
              the most effective path—whether measured by financial gain, social
              status, or otherwise—would have been the one where he continued
              his career in finance. The 80/20 Rule is calculated and determined
              by your recent effectiveness. Whatever seems like the “highest
              value” use of your time in any given moment will be dependent on
              your previous skills and current opportunities. The 80/20 Rule
              will help you find the useful things in your past and get more of
              them in the future. But if you don’t want your future to be more
              of your past, then you need a different approach. The downside of
              being effective is that you often optimize for your past rather
              than for your future. Where to Go From Here Here’s the good news:
              given enough practice and enough time, the thing that previously
              seemed ineffective can become very effective. You get good at what
              you practice. When Audrey Hepburn dialed down her acting career in
              1967, volunteering didn’t seem nearly as effective. But three
              decades later, she received the Presidential Medal of Freedom—a
              remarkable feat she is unlikely to have accomplished by acting in
              more romantic comedies. The process of learning a new skill or
              starting a new company or taking on a new adventure of any sort
              will often appear to be an ineffective use of time at first.
              Compared to the other things you already know how to do, the new
              thing will seem like a waste of time. It will never win the 80/20
              analysis. But that doesn’t mean it’s the wrong decision.
            </p>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
