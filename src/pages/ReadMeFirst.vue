<template>
  <q-page padding>
    <div class="study-container" v-html="studyHtml"></div
  ></q-page>
</template>

<script setup>
const studyHtml = `
  <h2>1. Choose the Right Study</h2>
  <p>Select a series&nbsp;that fits your group&rsquo;s needs, considering the group&rsquo;s background. Multiply takes you on a journey through 17 Foundational Bible Studies designed for new Christians and those who want to build a solid foundation for living out their faith.</p>

  <h2>2. Plan the Time</h2>
  <p>Allocate time wisely. Aim for 1 &frac12; hours for a full study (30 minutes for each section: Look Back, Look Up, Look Forward). If you only have 1 hour, try 20 minutes per section.</p>

  <h2>3. Create a Safe Space</h2>
  <p>Foster an environment where everyone feels comfortable sharing thoughts and asking questions. It&rsquo;s okay if someone doesn&rsquo;t want to answer a question. Encourage openness without fear of judgment.</p>

  <h2>4. Encourage Participation and Facilitation</h2>
  <p>Involve everyone by giving everyone a chance to share their thoughts, reflections, and questions. This helps people learn from each other and take ownership of their learning.</p>
  <p>By the third study, it is important to delegate responsibility to others in the group to lead sections of the Bible&nbsp;study. Ultimately, the goal is for group members to be able to facilitate the entire Bible&nbsp;study independently.</p>

  <h2>5. Keep the Focus on the Bible</h2>
  <p>Keep the chosen Bible passage as the main focus, without bringing in other passages. Ensure everyone is on equal footing by guiding the group through discovery, allowing them to engage with Scripture and understand God&rsquo;s truth for themselves. Avoid over-explaining or adding personal interpretations.</p>

  <h2>6. Stick to DBS Questions</h2>
  <p>Use the questions&nbsp;to guide the study. If you&rsquo;re short on time, skip a question if needed. Keep the focus on discovering what God says, learning to retell what you&rsquo;ve read, understanding how it applies to life, and sharing it with others. You can also make the questions more general (e.g., &ldquo;What can we apply from this passage?&rdquo;) to make the group more comfortable. Use words like &ldquo;we&rdquo; and &ldquo;us&rdquo; instead of &ldquo;you&rdquo;.</p>

  <h2>7. Stay Neutral</h2>
  <p>As the facilitator, guide the discussion without dominating it. Avoid giving long explanations, unless necessary to clarify. Let the group process the passage together.</p>

  <h2>8. Allow Time for Reflection</h2>
  <p>After reading the passage, give participants time to reflect before discussing or applying it. This helps everyone absorb the message more deeply.</p>

  <h2>9. Use Simple, Clear Language</h2>
  <p>These Bible discussions&nbsp;are for everyone, regardless of Bible knowledge. Use clear, simple language, and ensure everyone understands the questions and your explanations.</p>

  <h2>10. Encourage Accountability</h2>
  <p>At the end of the study, ask each person to share how they plan to apply the passage in their life. Follow up with them in the future to see how they&rsquo;re doing. By following these tips, you can facilitate a productive and engaging&nbsp; Bible discussion that encourages spiritual growth and meaningful conversation!</p>
`;
</script>

<style scoped>
.study-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.study-container h2 {
  margin-top: 1.5rem;
  font-size: 1.4rem;
  color: #3c6e89;
}

.study-container p {
  margin-top: 0.5rem;
}
</style>
