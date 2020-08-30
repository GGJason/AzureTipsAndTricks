(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{457:function(e,t,r){"use strict";r.r(t);var a=r(43),o=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("💡 Learn more :  "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/terraform/terraform-create-k8s-cluster-with-aks-applicationgateway-ingress?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Gateway Ingress Controller in Azure Kubernetes Service"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("This article was brought to you by "),r("a",{attrs:{href:"https://twitter.com/kumarallamraju",target:"_blank",rel:"noopener noreferrer"}},[e._v("@kumarallamraju"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"intro"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#intro","aria-hidden":"true"}},[e._v("#")]),e._v(" Intro")]),e._v(" "),r("p",[e._v("In the Kubernetes world there are different ways to get internal and external traffic into your Kubernetes cluster. As an example we have")]),e._v(" "),r("p",[r("strong",[e._v("ClusterIP:")]),e._v("\ndefault Kubernetes service accessible inside the Kubernetes cluster - no external access")]),e._v(" "),r("p",[r("strong",[e._v("NodePort:")]),e._v("\nmost primitive way to get external traffic directly to your service. As the name implies, it opens a specific port on all the Nodes (the VMs) and any traffic sent to this port is forwarded to the service.")]),e._v(" "),r("p",[r("strong",[e._v("LoadBalancer:")]),e._v("\nstandard way to expose a service to the internet. In Azure, this will spin up an Azure Load Balancer (L4) that gives us a single public IP address that forwards all traffic to your service.")]),e._v(" "),r("p",[r("strong",[e._v("Ingress:")]),e._v("\nUnlike all the above examples, Ingress is not actually a type of service but acts as a smart router or entry point into your cluster. We can do several things with an Ingress, and there are many types of Ingress controllers with varying capabilities (Istio, Contour, Traefik, NGINX). One of the popular ones and widely used is NGINX ingress controller. Ingress is more useful if you want to expose multiple services under the same IP address, and these services all use the same L7 protocol. You only pay for one load balancer price.")]),e._v(" "),r("p",[e._v("With the brief introduction on Load Balancer types, I wanted to talk about a new solution from Azure that binds the  Azure Kubernetes Service (AKS) with Application Gateway. This solution provides an open source Application Gateway Ingress Controller, which makes it possible for AKS customers to leverage Application Gateway to expose their Kubernetes services to the internet.")]),e._v(" "),r("h4",{attrs:{id:"how-does-it-work"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-work","aria-hidden":"true"}},[e._v("#")]),e._v(" How does it work?")]),e._v(" "),r("p",[e._v("Application Gateway Ingress Controller runs in its own pod on the customer’s AKS.")]),e._v(" "),r("p",[e._v("Much like the most popular Kubernetes Ingress Controllers, the Application Gateway Ingress Controller provides several features, leveraging Azure’s native Application Gateway L7 load balancer. To name a few:")]),e._v(" "),r("ul",[r("li",[e._v("URL routing")]),e._v(" "),r("li",[e._v("Cookie based affinity")]),e._v(" "),r("li",[e._v("SSL termination")]),e._v(" "),r("li",[e._v("End-to-End SSL")]),e._v(" "),r("li",[e._v("Support for public, private and hybrid websites")]),e._v(" "),r("li",[e._v("Integrated WAF")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/agw1.jpg")}}),e._v(" "),r("h4",{attrs:{id:"why-should-i-use-it"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#why-should-i-use-it","aria-hidden":"true"}},[e._v("#")]),e._v(" Why Should I use it?")]),e._v(" "),r("p",[e._v("The architecture of the Application Gateway Ingress Controller differs from that of a traditional in-cluster L7 load balancer. The architectural differences are shown in this diagram:")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/agw2.jpg")}}),e._v(" "),r("ul",[r("li",[r("p",[e._v("An in-cluster load balancer performs all data path operations leveraging the Kubernetes cluster’s compute resources. It competes for resources with the business apps it is fronting. In-cluster ingress controllers create Kubernetes Service Resources and leverage kubenet for network traffic. In comparison to Ingress Controller, traffic flows through an extra hop.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Application Gateway Ingress Controller leverages the AKS’ advanced networking")]),e._v(", which allocates an IP address for each pod from the subnet shared with Application Gateway. "),r("strong",[e._v("Application Gateway Ingress Controller has direct access to all Kubernetes pods")]),e._v(". This eliminates the need for data to pass through kubenet.")])])]),e._v(" "),r("h4",{attrs:{id:"ok-i-m-convinced-with-the-benefits-of-application-gateway-ingress-controller-and-wanted-to-give-it-a-shot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ok-i-m-convinced-with-the-benefits-of-application-gateway-ingress-controller-and-wanted-to-give-it-a-shot","aria-hidden":"true"}},[e._v("#")]),e._v(" OK, I'm convinced with the benefits of Application Gateway Ingress Controller and wanted to give it a shot?")]),e._v(" "),r("ol",[r("li",[e._v("Head over to the "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/terraform/terraform-create-k8s-cluster-with-aks-applicationgateway-ingress",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Gateway Ingress Controller"),r("OutboundLink")],1),e._v(" documentation page.")]),e._v(" "),r("li",[e._v("Download and Install "),r("a",{attrs:{href:"https://www.terraform.io/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("terraform"),r("OutboundLink")],1),e._v(" on your local desktop.")]),e._v(" "),r("li",[e._v("Our docs team did an excellent job in putting together a nice tutorial so I'm not going to repeat the steps here. It simply works great.")]),e._v(" "),r("li",[e._v("Create the .tf files as stated in the tutorial and finally run the "),r("code",[e._v("terraform apply out.plan")])]),e._v(" "),r("li",[e._v("Give it 10-15 minutes to fully provision the AKS and the Application Gateway Ingress Controller.")]),e._v(" "),r("li",[e._v("Point your browser to the public IP of the Application Gateway Ingress Controller and you should see the following output.")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/agw3.jpg")}}),e._v(" "),r("h4",{attrs:{id:"solution-performance"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#solution-performance","aria-hidden":"true"}},[e._v("#")]),e._v(" Solution Performance")]),e._v(" "),r("p",[e._v("As a result of Application Gateway having direct connectivity to the AKS pods, the "),r("strong",[e._v("Application Gateway Ingress Controller can achieve up to 50 percent lower network latency vs in-cluster ingress controllers")]),e._v(". Application Gateway is a fully managed service, backed by Azure virtual machine scale sets. "),r("strong",[e._v("Application Gateway Ingress Controller")]),e._v(" does not use AKS compute resources for data path processing. It does not share or interfere with the resources allocated to the Kubernetes deployment. Auto-scaling Application Gateway at peak times, unlike an in-cluster ingress, will not impede the ability to quickly scale up the apps’ pods. And of course, switching from in-cluster L7 ingress to Application Gateway will immediately decrease the compute load used by AKS.")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("Application Gateway Ingress Controller is now stable and available for use in production environments. The project is maturing quickly, and we are working actively to add new capabilities. We are working on enhancing the product with features that customers have been asking for, such as using certificates stored on Application Gateway, mutual TLS authentication, gRPC, and HTTP/2.  We highly encourage you to give it a try and provide your valuable feedback")]),e._v(" "),r("h4",{attrs:{id:"references"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[e._v("#")]),e._v(" References")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/terraform/terraform-create-k8s-cluster-with-aks-applicationgateway-ingress?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Gateway Ingress Controller in Azure Kubernetes Service"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://github.com/Azure/application-gateway-kubernetes-ingress?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Gateway Ingress Controller Github Page"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/application-gateway/ingress-controller-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Benefits of Application Gateway Ingress Controller"),r("OutboundLink")],1)])])])])},[],!1,null,null,null);t.default=o.exports}}]);