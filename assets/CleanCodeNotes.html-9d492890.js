const e=JSON.parse(`{"key":"v-d774d630","path":"/zh/blogs/CleanCodeNotes.html","title":"Clean Code Notes","lang":"zh-CN","frontmatter":{"description":"Clean Code Notes Chapter 1 - Clean Code Chapter 2 - Meaningful Names Chapter 3 - Functions Chapter 4 - Comments Chapter 5 - Formatting Chapter 6 - Objects and Data Structures Chapter 7 - Error Handling Chapter 8 - Boundaries Chapter 9 - Unit Tests Chapter 10 - Classes Chapter 11 - Systems Chapter 12 - Emergence Chapter 13 - Concurrency Chapter 14 - Successive Refinement Chapter 15 - JUnit Internals Chapter 16 - Refactoring SerialDate Chapter 17 - Smells and Heuristics","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://mister-hope.github.io/blogs/CleanCodeNotes.html"}],["meta",{"property":"og:url","content":"https://mister-hope.github.io/zh/blogs/CleanCodeNotes.html"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:title","content":"Clean Code Notes"}],["meta",{"property":"og:description","content":"Clean Code Notes Chapter 1 - Clean Code Chapter 2 - Meaningful Names Chapter 3 - Functions Chapter 4 - Comments Chapter 5 - Formatting Chapter 6 - Objects and Data Structures Chapter 7 - Error Handling Chapter 8 - Boundaries Chapter 9 - Unit Tests Chapter 10 - Classes Chapter 11 - Systems Chapter 12 - Emergence Chapter 13 - Concurrency Chapter 14 - Successive Refinement Chapter 15 - JUnit Internals Chapter 16 - Refactoring SerialDate Chapter 17 - Smells and Heuristics"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-09T16:44:00.000Z"}],["meta",{"property":"article:author","content":"Xiasong"}],["meta",{"property":"article:modified_time","content":"2023-11-09T16:44:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Clean Code Notes\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-09T16:44:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Xiasong\\",\\"url\\":\\"https://github.com/siazon/\\"}]}"]]},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Why write bad code?","slug":"why-write-bad-code","link":"#why-write-bad-code","children":[]},{"level":3,"title":"What is Clean Code?","slug":"what-is-clean-code","link":"#what-is-clean-code","children":[]},{"level":3,"title":"The boy Scout Rule","slug":"the-boy-scout-rule","link":"#the-boy-scout-rule","children":[]},{"level":3,"title":"Use Intention-Revealing Names","slug":"use-intention-revealing-names","link":"#use-intention-revealing-names","children":[]},{"level":3,"title":"Avoid Disinformation","slug":"avoid-disinformation","link":"#avoid-disinformation","children":[]},{"level":3,"title":"Make Meaningful Distinctions","slug":"make-meaningful-distinctions","link":"#make-meaningful-distinctions","children":[]},{"level":3,"title":"Use Pronounceable Names","slug":"use-pronounceable-names","link":"#use-pronounceable-names","children":[]},{"level":3,"title":"Use Searchable Names","slug":"use-searchable-names","link":"#use-searchable-names","children":[]},{"level":3,"title":"Avoid Encoding","slug":"avoid-encoding","link":"#avoid-encoding","children":[]},{"level":3,"title":"Avoid Mental Mapping","slug":"avoid-mental-mapping","link":"#avoid-mental-mapping","children":[]},{"level":3,"title":"Class Names","slug":"class-names","link":"#class-names","children":[]},{"level":3,"title":"Method Names","slug":"method-names","link":"#method-names","children":[]},{"level":3,"title":"Don't Be Cute","slug":"don-t-be-cute","link":"#don-t-be-cute","children":[]},{"level":3,"title":"Pick one word per concept","slug":"pick-one-word-per-concept","link":"#pick-one-word-per-concept","children":[]},{"level":3,"title":"Don’t Pun","slug":"don-t-pun","link":"#don-t-pun","children":[]},{"level":3,"title":"Use Solution Domain Names","slug":"use-solution-domain-names","link":"#use-solution-domain-names","children":[]},{"level":3,"title":"Use Problem Domain Names","slug":"use-problem-domain-names","link":"#use-problem-domain-names","children":[]},{"level":3,"title":"Add Meaningful context","slug":"add-meaningful-context","link":"#add-meaningful-context","children":[]},{"level":3,"title":"Don’t Add Gratuitous Context","slug":"don-t-add-gratuitous-context","link":"#don-t-add-gratuitous-context","children":[]},{"level":3,"title":"Small!!","slug":"small","link":"#small","children":[]},{"level":3,"title":"Do One Thing","slug":"do-one-thing","link":"#do-one-thing","children":[]},{"level":3,"title":"One Level of Abstraction per Function","slug":"one-level-of-abstraction-per-function","link":"#one-level-of-abstraction-per-function","children":[]},{"level":3,"title":"Switch Statements","slug":"switch-statements","link":"#switch-statements","children":[]},{"level":3,"title":"Use Descriptive Names","slug":"use-descriptive-names","link":"#use-descriptive-names","children":[]},{"level":3,"title":"Function arguments","slug":"function-arguments","link":"#function-arguments","children":[]},{"level":3,"title":"Output Arguments","slug":"output-arguments","link":"#output-arguments","children":[]},{"level":3,"title":"Command Query Separation","slug":"command-query-separation","link":"#command-query-separation","children":[]},{"level":3,"title":"Prefer Exceptions to Returning Error Codes","slug":"prefer-exceptions-to-returning-error-codes","link":"#prefer-exceptions-to-returning-error-codes","children":[]},{"level":3,"title":"Don't Repeat Yourself","slug":"don-t-repeat-yourself","link":"#don-t-repeat-yourself","children":[]},{"level":3,"title":"Structured Programming","slug":"structured-programming","link":"#structured-programming","children":[]},{"level":3,"title":"Comments Do Not Make Up for Bad Code","slug":"comments-do-not-make-up-for-bad-code","link":"#comments-do-not-make-up-for-bad-code","children":[]},{"level":3,"title":"Explain Yourself in Code","slug":"explain-yourself-in-code","link":"#explain-yourself-in-code","children":[]},{"level":3,"title":"Good Comments","slug":"good-comments","link":"#good-comments","children":[]},{"level":3,"title":"Bad Comments","slug":"bad-comments","link":"#bad-comments","children":[]},{"level":3,"title":"Vertical Formatting","slug":"vertical-formatting","link":"#vertical-formatting","children":[]},{"level":3,"title":"Horizontal Formatting","slug":"horizontal-formatting","link":"#horizontal-formatting","children":[]},{"level":3,"title":"Indentation","slug":"indentation","link":"#indentation","children":[]},{"level":3,"title":"Team Rules","slug":"team-rules","link":"#team-rules","children":[]},{"level":3,"title":"Data Abstraction","slug":"data-abstraction","link":"#data-abstraction","children":[]},{"level":3,"title":"Data/Object Anti-Symmetry","slug":"data-object-anti-symmetry","link":"#data-object-anti-symmetry","children":[]},{"level":3,"title":"The Law of Demeter","slug":"the-law-of-demeter","link":"#the-law-of-demeter","children":[]},{"level":3,"title":"Data Transfer Objects","slug":"data-transfer-objects","link":"#data-transfer-objects","children":[]},{"level":3,"title":"Use Exceptions Rather Than Return Codes","slug":"use-exceptions-rather-than-return-codes","link":"#use-exceptions-rather-than-return-codes","children":[]},{"level":3,"title":"Write Your Try-Catch-Finally Statement First","slug":"write-your-try-catch-finally-statement-first","link":"#write-your-try-catch-finally-statement-first","children":[]},{"level":3,"title":"Provide Context with Exceptions","slug":"provide-context-with-exceptions","link":"#provide-context-with-exceptions","children":[]},{"level":3,"title":"Don't Return Null","slug":"don-t-return-null","link":"#don-t-return-null","children":[]},{"level":3,"title":"Don't Pass Null","slug":"don-t-pass-null","link":"#don-t-pass-null","children":[]},{"level":3,"title":"Using Third-Party Code","slug":"using-third-party-code","link":"#using-third-party-code","children":[]},{"level":3,"title":"Exploring and Learning Boundaries","slug":"exploring-and-learning-boundaries","link":"#exploring-and-learning-boundaries","children":[]},{"level":3,"title":"Learning Tests Are Better Than Free","slug":"learning-tests-are-better-than-free","link":"#learning-tests-are-better-than-free","children":[]},{"level":3,"title":"Using Code That Does Not Yet Exist","slug":"using-code-that-does-not-yet-exist","link":"#using-code-that-does-not-yet-exist","children":[]},{"level":3,"title":"Clean Boundaries","slug":"clean-boundaries","link":"#clean-boundaries","children":[]},{"level":3,"title":"The Three Laws of TDD","slug":"the-three-laws-of-tdd","link":"#the-three-laws-of-tdd","children":[]},{"level":3,"title":"Clean Tests","slug":"clean-tests","link":"#clean-tests","children":[]},{"level":3,"title":"One Assert per test","slug":"one-assert-per-test","link":"#one-assert-per-test","children":[]},{"level":3,"title":"Single concept per Test","slug":"single-concept-per-test","link":"#single-concept-per-test","children":[]},{"level":3,"title":"F.I.R.S.T","slug":"f-i-r-s-t","link":"#f-i-r-s-t","children":[]}]},{"level":2,"title":"Class Organization","slug":"class-organization","link":"#class-organization","children":[{"level":3,"title":"Encapsulation","slug":"encapsulation","link":"#encapsulation","children":[]}]},{"level":2,"title":"Classes Should be Small","slug":"classes-should-be-small","link":"#classes-should-be-small","children":[{"level":3,"title":"The Single Responsibility Principle","slug":"the-single-responsibility-principle","link":"#the-single-responsibility-principle","children":[]},{"level":3,"title":"Cohesion","slug":"cohesion","link":"#cohesion","children":[]},{"level":3,"title":"Maintaining Cohesion Results in Many Small Classes","slug":"maintaining-cohesion-results-in-many-small-classes","link":"#maintaining-cohesion-results-in-many-small-classes","children":[]}]},{"level":2,"title":"Organizing for change","slug":"organizing-for-change","link":"#organizing-for-change","children":[{"level":3,"title":"Isolating from Change","slug":"isolating-from-change","link":"#isolating-from-change","children":[]}]},{"level":2,"title":"Separate Constructing a System from using It","slug":"separate-constructing-a-system-from-using-it","link":"#separate-constructing-a-system-from-using-it","children":[{"level":3,"title":"Separation from main","slug":"separation-from-main","link":"#separation-from-main","children":[]},{"level":3,"title":"Dependency Injection","slug":"dependency-injection","link":"#dependency-injection","children":[]}]},{"level":2,"title":"Myths and Misconceptions","slug":"myths-and-misconceptions","link":"#myths-and-misconceptions","children":[]},{"level":2,"title":"Comments","slug":"comments","link":"#comments","children":[]},{"level":2,"title":"Environment","slug":"environment","link":"#environment","children":[]},{"level":2,"title":"Functions","slug":"functions","link":"#functions","children":[]},{"level":2,"title":"General","slug":"general","link":"#general","children":[]},{"level":2,"title":"Names","slug":"names","link":"#names","children":[]},{"level":2,"title":"Tests","slug":"tests","link":"#tests","children":[]}],"git":{"createdTime":1699548240000,"updatedTime":1699548240000,"contributors":[{"name":"Xiasong Chen","email":"296724771@qq.com","commits":1}]},"readingTime":{"minutes":33.38,"words":10015},"filePathRelative":"zh/blogs/CleanCodeNotes.md","localizedDate":"2023年11月9日","excerpt":"<h1> Clean Code Notes</h1>\\n\\n<ul>\\n<li><a href=\\"#chapter1\\">Chapter 1 - Clean Code</a></li>\\n<li><a href=\\"#chapter2\\">Chapter 2 - Meaningful Names</a></li>\\n<li><a href=\\"#chapter3\\">Chapter 3 - Functions</a></li>\\n<li><a href=\\"#chapter4\\">Chapter 4 - Comments</a></li>\\n<li><a href=\\"#chapter5\\">Chapter 5 - Formatting</a></li>\\n<li><a href=\\"#chapter6\\">Chapter 6 - Objects and Data Structures</a></li>\\n<li><a href=\\"#chapter7\\">Chapter 7 - Error Handling</a></li>\\n<li><a href=\\"#chapter8\\">Chapter 8 - Boundaries</a></li>\\n<li><a href=\\"#chapter9\\">Chapter 9 - Unit Tests</a></li>\\n<li><a href=\\"#chapter10\\">Chapter 10 - Classes</a></li>\\n<li><a href=\\"#chapter11\\">Chapter 11 - Systems</a></li>\\n<li><a href=\\"#chapter12\\">Chapter 12 - Emergence</a></li>\\n<li><a href=\\"#chapter13\\">Chapter 13 - Concurrency</a></li>\\n<li><a href=\\"#chapter14\\">Chapter 14 - Successive Refinement</a></li>\\n<li><a href=\\"#chapter15\\">Chapter 15 - JUnit Internals</a></li>\\n<li><a href=\\"#chapter15\\">Chapter 16 - Refactoring SerialDate</a></li>\\n<li><a href=\\"#chapter17\\">Chapter 17 - Smells and Heuristics</a></li>\\n</ul>","autoDesc":true}`);export{e as data};