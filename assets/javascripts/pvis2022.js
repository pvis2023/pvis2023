/*
 * A list of past events was originally generated using Vue.js but later re-writteng using
 * a Liquid template (see _includes/past_events.html).  Therefore, the original Vue.js
 * template being removed.
new Vue({
  el: '#prevevents',
  data: { prev_events: PREV_EVENTS, },
  template: `
    <div>
      <h2>Previous Events</h2>
      <table>
        <thead><td>Year</td><td>City</td><td>Date</td><td>URL</td>
        </thead>
        <tbody>
          <tr v-for="ev in prev_events" :key="ev[0]">
            <td>{{ev[0]}}</td><td>{{ev[1]}}</td><td>{{ev[2]}}</td><td><a :href="ev[3]">Website</a></td>
          </tr>
        </tbody>
      </table>
    </div>`
});
*/
