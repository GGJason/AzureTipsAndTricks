(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{508:function(e,s,t){"use strict";t.r(s);var a=t(43),n=Object(a.a)({},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("💡 Learn more : "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/containers/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure for Containers"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h4",{attrs:{id:"continuous-deployment-with-docker-and-web-app-for-containers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#continuous-deployment-with-docker-and-web-app-for-containers","aria-hidden":"true"}},[e._v("#")]),e._v(" Continuous Deployment with Docker and Web App for Containers")]),e._v(" "),t("p",[e._v("To recap, "),t("router-link",{attrs:{to:"./tip55.html"}},[e._v("in Tip 55 - Docker Compose")]),e._v(" to create an image using our existing "),t("router-link",{attrs:{to:"./tip54.html"}},[e._v("ASP.NET WebAPI project")]),e._v(" and push it to Docker Cloud. I also covered deploying it to Azure using "),t("router-link",{attrs:{to:"./tip56.html"}},[e._v("Web App for Containers")]),e._v(". I also explained the difference between "),t("router-link",{attrs:{to:"./tip57.html"}},[e._v("Docker Registry and Docker Repository in Tip 57")]),e._v(" and this tip, I'll cover setting up Continuous Deployment with Docker and Web App for Containers.")],1),e._v(" "),t("p",[e._v("Navigate back to the Web App for Container service "),t("router-link",{attrs:{to:"./tip56.html"}},[e._v("we recently created")]),e._v(". Look under "),t("strong",[e._v("Settings")]),e._v(" and click on "),t("strong",[e._v("Docker Container")]),e._v(". You'll see "),t("strong",[e._v("Continuous Deployment")]),e._v(" and will need to switch it on and then "),t("strong",[e._v("Show the URL")]),e._v(" and copy and paste it into somewhere else. Go ahead and press "),t("strong",[e._v("save")]),e._v(".")],1),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/dockercd1.png")}}),e._v(" "),t("p",[t("strong",[e._v("Note")]),e._v(" If you want to verify CD is setup correctly, go to your "),t("strong",[e._v("Application Settings")]),e._v(" and under "),t("strong",[e._v("App Settings")]),e._v(", you'll see "),t("code",[e._v("DOCKER_ENABLE_CI")]),e._v(" has been set to true.")]),e._v(" "),t("p",[e._v("Navigate back over to "),t("a",{attrs:{href:"https://hub.docker.com/r/mbcrump/mbcwebapi/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),t("OutboundLink")],1),e._v(" and navigate to your repository. You'll see "),t("strong",[e._v("Web Hooks")]),e._v(" and want to add the URL that you copied earlier.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/dockercd2.png")}}),e._v(" "),t("p",[e._v("Now head back to the terminal or command prompt and make a change to your application. I'm going to go into my "),t("code",[e._v("ValuesController.cs")]),e._v(" application and modify what returns from the "),t("code",[e._v("api\\values")]),e._v(" to "),t("code",[e._v('"myupdatedvalue1", "myupdatedvalue2"')]),e._v(" instead of "),t("code",[e._v('"value1", "value2"')])]),e._v(" "),t("div",{staticClass:"language-csharp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// GET api/values")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HttpGet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" IEnumerable"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("Get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"myupdatedvalue1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"myupdatedvalue2"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("I'm going to run the "),t("code",[e._v("publish -c Release -o ./obj/Docker/publish")]),e._v(" command to create the new .dlls for the site.")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Michaels-MacBook-Pro:mbcwebapi mbcrump$ cd mbcwebapi\nMichaels-MacBook-Pro:mbcwebapi mbcrump$ dotnet publish -c Release -o ./obj/Docker/publish\nMicrosoft (R) Build Engine version 15.3.409.57025 for .NET Core\nCopyright (C) Microsoft Corporation. All rights reserved.\n\n  mbcwebapi -> /Users/mbcrump/mbcwebapi/mbcwebapi/bin/Release/netcoreapp2.0/mbcwebapi.dll\n  mbcwebapi -> /Users/mbcrump/mbcwebapi/mbcwebapi/obj/Docker/publish/\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("Now I'll run "),t("code",[e._v("docker-compose build")]),e._v(" to rebuild my "),t("strong",[e._v("latest")]),e._v(" image.")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Michaels-MacBook-Pro:mbcwebapi mbcrump$ docker-compose build\nBuilding mbcwebapi\nStep 1/6 : FROM microsoft/aspnetcore:2.0\n ---\x3e 757f574feed9\nStep 2/6 : ARG source\n ---\x3e Using cache\n ---\x3e 96deb3aec068\nStep 3/6 : WORKDIR /app\n ---\x3e Using cache\n ---\x3e c0fecb757aa4\nStep 4/6 : EXPOSE 80\n ---\x3e Using cache\n ---\x3e e4f034c54397\nStep 5/6 : COPY ${source:-obj/Docker/publish} .\n ---\x3e 99956ad310ad\nStep 6/6 : ENTRYPOINT dotnet mbcwebapi.dll\n ---\x3e Running in d852ec609fa3\n ---\x3e 84120db3271e\nRemoving intermediate container d852ec609fa3\nSuccessfully built 84120db3271e\nSuccessfully tagged mbcrump/mbcwebapi:latest\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br")])]),t("p",[e._v("I'll now push this image to Docker Cloud with "),t("code",[e._v("docker push mbcrump/mbcwebapi:latest")])]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Michaels-MacBook-Pro:mbcwebapi mbcrump$ docker push mbcrump/mbcwebapi:latest\nThe push refers to a repository [docker.io/mbcrump/mbcwebapi]\nbb538a44e79e: Pushed \n2810d33d0bd6: Layer already exists \neff6ab78003d: Layer already exists \n8b2ae5b337fe: Layer already exists \n587f57f69c02: Layer already exists \n5c4bb5b2f630: Layer already exists \na75caa09eb1f: Layer already exists \nlatest: digest: sha256:d441ddbc8854b63529e7e99e5731a7497dd5c14665a9bfc5cb006827018cb518 size: 1790\nMichaels-MacBook-Pro:mbcwebapi mbcrump$ \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])]),t("p",[e._v("If I switch back over to Docker Hub, then I show "),t("strong",[e._v("History")]),e._v(" and see it has automatically deployed my latest build.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/dockercd3.png")}}),e._v(" "),t("p",[e._v("If I go back to my site and enter my url and append "),t("code",[e._v("/api/values")]),e._v(", then I'll see the updated values. Success!")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/dockercd4.png")}})])},[],!1,null,null,null);s.default=n.exports}}]);