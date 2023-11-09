const e=JSON.parse('{"key":"v-7342cd0e","path":"/zh/blogs/EngineeringFundamentalsChecklist.html","title":"Engineering Fundamentals Checklist","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Engineering Fundamentals Checklist","description":"页面的描述","star":true,"head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://mister-hope.github.io/blogs/EngineeringFundamentalsChecklist.html"}],["meta",{"property":"og:url","content":"https://mister-hope.github.io/zh/blogs/EngineeringFundamentalsChecklist.html"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:title","content":"Engineering Fundamentals Checklist"}],["meta",{"property":"og:description","content":"页面的描述"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-09T16:44:00.000Z"}],["meta",{"property":"article:author","content":"Xiasong"}],["meta",{"property":"article:modified_time","content":"2023-11-09T16:44:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Engineering Fundamentals Checklist\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-09T16:44:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Xiasong\\",\\"url\\":\\"https://github.com/siazon/\\"}]}"]]},"headers":[{"level":2,"title":"Source Control","slug":"source-control","link":"#source-control","children":[]},{"level":2,"title":"Work Item Tracking","slug":"work-item-tracking","link":"#work-item-tracking","children":[]},{"level":2,"title":"Testing","slug":"testing","link":"#testing","children":[]},{"level":2,"title":"CI/CD","slug":"ci-cd","link":"#ci-cd","children":[]},{"level":2,"title":"Security","slug":"security","link":"#security","children":[]},{"level":2,"title":"Observability","slug":"observability","link":"#observability","children":[]},{"level":2,"title":"Agile/Scrum","slug":"agile-scrum","link":"#agile-scrum","children":[]},{"level":2,"title":"Design Reviews","slug":"design-reviews","link":"#design-reviews","children":[]},{"level":2,"title":"Code Reviews","slug":"code-reviews","link":"#code-reviews","children":[]},{"level":2,"title":"Retrospectives","slug":"retrospectives","link":"#retrospectives","children":[]},{"level":2,"title":"Engineering Feedback","slug":"engineering-feedback","link":"#engineering-feedback","children":[]},{"level":2,"title":"Developer Experience (DevEx)","slug":"developer-experience-devex","link":"#developer-experience-devex","children":[]}],"git":{"createdTime":1699548240000,"updatedTime":1699548240000,"contributors":[{"name":"Xiasong Chen","email":"296724771@qq.com","commits":1}]},"readingTime":{"minutes":2.14,"words":643},"filePathRelative":"zh/blogs/EngineeringFundamentalsChecklist.md","localizedDate":"2023年11月9日","excerpt":"<h1> Engineering Fundamentals Checklist</h1>\\n<p>This checklist is excerpted from Microsoft and is very useful for reference.</p>\\n<h2> Source Control</h2>\\n<ul class=\\"task-list-container\\">\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-0\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-0\\"> The default target branch is locked.</label></li>\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-1\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-1\\"> Merges are done through PRs.</label></li>\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-2\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-2\\"> PRs reference related work items.</label></li>\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-3\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-3\\"> Commit history is consistent and commit messages are informative (what, why).</label></li>\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-4\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-4\\"> Consistent branch naming conventions.</label></li>\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-5\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-5\\"> Clear documentation of repository structure.</label></li>\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-6\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-6\\"> Secrets are not part of the commit history or made public. (see Credential scanning)</label></li>\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-7\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-7\\"> Public repositories follow the OSS guidelines, see Required files in default branch for public repositories.</label></li>\\n</ul>"}');export{e as data};