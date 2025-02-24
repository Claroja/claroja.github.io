import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as a,e as s}from"./app-A10JnHE0.js";const o="/assets/1-JWXHicOA.png",n="/assets/2-2a1lJ74v.png",r="/assets/3-UDj6prYU.png",i="/assets/4-m1E9-s03.png",d="/assets/5-7ixVFPc-.png",c={},l=s('<h1 id="dynamictable" tabindex="-1"><a class="header-anchor" href="#dynamictable" aria-hidden="true">#</a> dynamicTable</h1><h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> Concept</h2><p>In contrast to the <code>static tables</code> that represent <code>batch data</code>, <code>dynamic tables</code> change over time. Querying dynamic tables yields a Continuous Query. A continuous query <strong>never terminates</strong> and <strong>produces dynamic results</strong> - another dynamic table. The query continuously updates its (dynamic) result table to reflect changes on its (dynamic) input tables. The following figure visualizes the relationship of streams, dynamic tables, and continuous queries: <img src="'+o+'" alt="" loading="lazy"></p><ol><li>A stream is converted into a dynamic table.</li><li>A continuous query is evaluated on the dynamic table yielding a new dynamic table.</li><li>The resulting dynamic table is converted back into a stream. NOTE: Dynamic tables are foremost a <em>logical concept</em>*. Dynamic tables are <strong>not necessarily (fully) materialized</strong> during query execution.</li></ol><h2 id="defining-a-table-on-a-stream" tabindex="-1"><a class="header-anchor" href="#defining-a-table-on-a-stream" aria-hidden="true">#</a> Defining a Table on a Stream</h2><p>The following figure visualizes how the stream of click event (left-hand side) is converted into a table (right-hand side). The resulting table is continuously growing as more records of the click stream are inserted. <img src="'+n+'" alt="" loading="lazy"> NOTE: Remember, a table defined on a stream is internally <strong>not materialized</strong>.</p><h2 id="continuous-queries" tabindex="-1"><a class="header-anchor" href="#continuous-queries" aria-hidden="true">#</a> Continuous Queries</h2><p>A continuous query is evaluated on a dynamic table and produces a new dynamic table as a result. In contrast to a batch query, a continuous query <strong>never terminates</strong> and <strong>updates its result table according to its input tables’ updates</strong>.</p><h3 id="groupby" tabindex="-1"><a class="header-anchor" href="#groupby" aria-hidden="true">#</a> groupby</h3><p>The following figure shows how the query is evaluated over time as the clicks table is updated with additional rows. <img src="'+r+'" alt="" loading="lazy"> When the query starts, the <code>clicks</code> table (left-hand side) is empty. The query computes the result table when the first row is <code>inserted</code>. After the first row <code>[Mary, ./home]</code> arrives, the result table (right-hand side, top) consists of a single row <code>[Mary, 1]</code>. When the second row <code>[Bob, ./cart]</code> is <code>inserted</code> into the clicks table, the query updates the result table and inserts a new row <code>[Bob, 1]</code>. The third row, <code>[Mary, ./prod?id=1]</code> yields an <code>update</code> of an already computed result row such that <code>[Mary, 1]</code> is updated to <code>[Mary, 2]</code>.</p><h3 id="window" tabindex="-1"><a class="header-anchor" href="#window" aria-hidden="true">#</a> window</h3><p>The second query is similar to the first one but groups the <code>clicks</code> table in addition to the user attribute also on an <code>hourly tumbling window</code> before it counts the number of URLs. <img src="'+i+'" alt="" loading="lazy"> The query <strong>continuously computes results every hour</strong> and updates the result table. The clicks table contains four rows with timestamps (cTime) between 12:00:00 and 12:59:59.The query computes two results rows from this input (one for each user) and <code>appends</code> them to the result table. For the next window between 13:00:00 and 13:59:59, the clicks table contains three rows, which results in another two rows being <code>appended</code> to the result table. The result table is updated as more rows are <code>appended</code> to clicks over time.</p><h3 id="update-and-append-queries" tabindex="-1"><a class="header-anchor" href="#update-and-append-queries" aria-hidden="true">#</a> Update and Append Queries</h3><p>The first query updates previously emitted results, i.e., the changelog stream that defines the result table contains <code>INSERT</code> and <code>UPDATE</code> changes. The second query only appends to the result table, i.e., the result table’s changelog stream only consists of <code>INSERT</code> changes.</p><h3 id="query-restrictions" tabindex="-1"><a class="header-anchor" href="#query-restrictions" aria-hidden="true">#</a> Query Restrictions</h3><p>Some queries are too expensive to compute, either due to the size of state they need to maintain or because computing updates is too expensive.</p><ul><li><p><strong>State Size</strong>: Continuous queries are evaluated on unbounded streams and are often supposed to run for weeks or months. Hence, the total amount of data that a continuous query processes can be very large.</p></li><li><p><strong>Computing Updates</strong>: Some queries require to recompute and update a large fraction of the emitted result rows even if only a single input record is added or updated. An example is the query that computes a RANK for each user based on the time of the last click.</p></li></ul><h2 id="table-to-stream-conversion" tabindex="-1"><a class="header-anchor" href="#table-to-stream-conversion" aria-hidden="true">#</a> Table to Stream Conversion</h2><p>A dynamic table can be continuously modified by <code>INSERT</code>, <code>UPDATE</code>, and <code>DELETE</code> changes just like a regular database table.When converting a dynamic table into a stream or writing it to an external system, these changes need to be encoded. Flink’s Table API and SQL support three ways to encode the changes of a dynamic table:</p><ul><li><p><strong>Append-only stream</strong>: A dynamic table that is only modified by INSERT changes can be converted into a stream by emitting the inserted rows.</p></li><li><p><strong>Retract stream</strong>: A retract stream is a stream with two types of messages, <code>add messages</code> and <code>retract messages</code>.A dynamic table is converted into a retract stream by encoding an <code>INSERT</code> change as <code>add message</code>, a <code>DELETE</code> change as a <code>retract message</code>, and an <code>UPDATE</code> change as a <code>retract message for the updated (previous) row</code>, and an additional message for the updating (new) row. <img src="'+d+'" alt="" loading="lazy"></p></li><li><p><strong>Upsert stream</strong>: An upsert stream is a stream with two types of messages, <code>upsert messages</code> and <code>delete messages</code>. A dynamic table that is converted into an upsert stream requires a (possibly composite) <strong>unique key</strong>. A dynamic table with a unique key is transformed into a stream by encoding <code>INSERT</code> and <code>UPDATE</code> changes as <code>upsert messages</code> and <code>DELETE</code> changes as <code>delete messages</code>. <strong>The stream consuming operator needs to be aware of the unique key attribute to apply messages correctly</strong>. The main difference to a retract stream is that UPDATE changes are encoded with a single message and hence more efficient.</p></li></ul><p>refs: https://nightlies.apache.org/flink/flink-docs-master/docs/dev/table/concepts/dynamic_tables/</p>',21),u=[l];function h(m,p){return t(),a("div",null,u)}const b=e(c,[["render",h],["__file","dynamicTable.html.vue"]]);export{b as default};
