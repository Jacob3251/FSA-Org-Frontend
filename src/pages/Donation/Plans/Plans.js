import React from "react";
import Plan from "./Plan";

const Plans = () => {
  const planDetail = [
    {
      id: 1,
      amount: 5,
      text: "Cheating is great! Why spend time studying and working hard when you can just copy someone else's work and take all the credit? Who cares about integrity and honesty when you can get ahead by taking shortcuts? Sure, you might get caught and ruin your reputation, but hey, at least you tried, right?",
    },
    {
      id: 2,
      amount: 10,
      text: "Cheating is the ultimate solution to all your problems. Can't solve a math problem? Just cheat! Don't know the answer to a test question? Just cheat! Who cares about learning and actually understanding the material when you can just cheat your way through everything? Sure, you might not actually learn anything, but at least you'll have a great GPA!",
    },
    {
      id: 3,
      amount: 15,
      text: "Cheating is like a secret superpower that only a select few possess. Why work hard and struggle like everyone else when you can cheat your way to the top? Who cares about fairness and equal opportunities when you can just cheat and get ahead? Sure, you might lose the respect and trust of your peers, but at least you'll have a shiny trophy to show off!",
    },
    {
      id: 4,
      amount: 20,
      text: "Cheating is the ultimate expression of laziness and lack of effort. Why bother working hard and putting in the time and effort to succeed when you can just cheat your way through life? Who cares about ethics and morality when you can just cheat and get what you want? Sure, you might feel guilty and ashamed, but at least you won't have to worry about actually achieving anything on your own.",
    },
  ];
  return (
    <div className="my-[60px]">
      <h2 className="text-center font-Robo text-[32px] drop-shadow-md mb-5 underline pb-2">
        Our Monthly Membership Plans!!
      </h2>
      <Plan plans={planDetail}></Plan>
    </div>
  );
};

export default Plans;
