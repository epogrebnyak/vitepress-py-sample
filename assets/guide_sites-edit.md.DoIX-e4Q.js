import{_ as a,c as r,j as e,I as i,w as s,a as t,aT as n,D as l,o as d}from"./chunks/framework.MwcnBM3t.js";const c="/vitepress-py-sample/vpadmin/sites-edit-anotated.png",h="/vitepress-py-sample/vpadmin/HeaderToggle.webm",u="/vitepress-py-sample/vpadmin/ProjectSelector.webm",p="/vitepress-py-sample/vpadmin/ProjectQuotaProgress.png",g="/vitepress-py-sample/vpadmin/ActionBar.png",_="/vitepress-py-sample/vpadmin/PublicationProgressBar.webm",m="/vitepress-py-sample/vpadmin/FileTree.webm",f="/vitepress-py-sample/vpadmin/ChangedFilesTree.webm",v="/vitepress-py-sample/vpadmin/VersionHistory.webm",b="/vitepress-py-sample/vpadmin/Resizer.webm",y="/vitepress-py-sample/vpadmin/TabContextMenu.png",w="/vitepress-py-sample/vpadmin/FileEditor.webm",_e=JSON.parse('{"title":"Sites Edit Overview","description":"","frontmatter":{},"headers":[],"relativePath":"guide/sites-edit.md","filePath":"en/guide/sites-edit.md","lastUpdated":1738773469000}'),T={name:"guide/sites-edit.md"},P=e("h1",{id:"sites-edit-overview",tabindex:"-1"},[t("Sites Edit Overview "),e("a",{class:"header-anchor",href:"#sites-edit-overview","aria-label":'Permalink to "Sites Edit Overview"'},"​")],-1),S=e("p",null,[t("The "),e("strong",null,"Sites Edit"),t(" page in VpAdmin provides a powerful and streamlined interface for managing and editing your websites, simplifying the entire publishing process from content creation to deployment. It combines a file tree view, a markdown/code editor, and robust version control tools, empowering you to fine-tune your site's content, structure, and deployment workflow with ease.")],-1),A=e("h2",{id:"overview",tabindex:"-1"},[t("Overview "),e("a",{class:"header-anchor",href:"#overview","aria-label":'Permalink to "Overview"'},"​")],-1),C=e("p",null,"The page is divided into three main sections:",-1),k=e("li",null,[e("p",null,[e("strong",null,"Left Sidebar:"),t(" Provides access to the project file tree, various actions, and project-related information.")])],-1),j=e("li",null,[e("p",null,[e("strong",null,"Resizer:"),t(" A draggable separator used to adjust the width of the left sidebar.")])],-1),x=e("p",null,[e("strong",null,"Main Content Area:"),t(" Displays the file content in an editor, tabs for different open files, and project management tools.")],-1),V=e("a",{href:"/vpadmin/sites-edit-anotated.png",class:"zoomable-image"},[e("img",{src:c,alt:"Sites Edit"})],-1),F=n('<h2 id="left-sidebar" tabindex="-1">Left Sidebar <a class="header-anchor" href="#left-sidebar" aria-label="Permalink to &quot;Left Sidebar&quot;">​</a></h2><p>The left sidebar is designed for project navigation and management, and it includes several key components:</p><h3 id="header-toggle" tabindex="-1">Header Toggle <a class="header-anchor" href="#header-toggle" aria-label="Permalink to &quot;Header Toggle&quot;">​</a></h3><ul><li><p><strong>Functionality:</strong> Toggles the visibility of the header section, which contains the project selector, refresh button, and project quota progress.</p></li><li><p><strong>Action:</strong> Clicking the header-toggle icon toggles the header visibility.</p><video width="300" height="768" autoplay muted loop><source src="'+h+'" type="video/mp4"></video></li></ul><h3 id="project-selector" tabindex="-1">Project Selector <a class="header-anchor" href="#project-selector" aria-label="Permalink to &quot;Project Selector&quot;">​</a></h3><ul><li><p><strong>Functionality:</strong> Select a project that you want to edit.</p></li><li><p><strong>Action:</strong> Click the dropdown, and choose the project from the list.</p><video width="300" height="768" autoplay muted loop><source src="'+u+'" type="video/mp4"></video></li></ul><h3 id="project-quota-progress" tabindex="-1">Project Quota Progress <a class="header-anchor" href="#project-quota-progress" aria-label="Permalink to &quot;Project Quota Progress&quot;">​</a></h3>',7),q=e("li",null,[e("p",null,[e("strong",null,"Functionality:"),t(" Displays the current site usage quota. The displayed storage capacity will vary based on the selected pricing plan for your site. For more details, please refer to "),e("a",{href:"./../prices/prices"},"Prices"),t(".")])],-1),D=e("p",null,[e("strong",null,"Screenshot of Project Quota Progress:")],-1),E=e("a",{href:"/vpadmin/ProjectQuotaProgress.png",class:"zoomable-image"},[e("img",{src:p,alt:"Project Quota Progress",style:{width:"50%"}})],-1),I=e("h3",{id:"action-bar",tabindex:"-1"},[t("Action Bar "),e("a",{class:"header-anchor",href:"#action-bar","aria-label":'Permalink to "Action Bar"'},"​")],-1),z=n("<li><p><strong>Functionality:</strong> Provides a set of buttons to manage the files and make changes to your site.</p></li><li><p><strong>Layout:</strong> The action bar includes the following buttons:</p><ul><li><strong>Show Recovery Points:</strong> Allows you to access and manage recovery points for your project, helping you revert to earlier versions.</li><li><strong>Save All:</strong> Saves all the changes that you have made.</li><li><strong>Expand All:</strong> Expands all the nodes in the file tree.</li><li><strong>Collapse All:</strong> Collapses all the nodes in the file tree.</li><li><strong>Show/Hide All Files:</strong> Toggles the display of all files or only those related to your site&#39;s content.</li><li><strong>Download Project:</strong> Downloads a zip file containing your site files.</li><li><strong>Show/Hide Changed Files:</strong> Toggles the display of changed files in the tree.</li><li><strong>View History:</strong> Opens the commit history, allowing you to revert to a previous version.</li><li><strong>Submit Changes:</strong> Submits your selected changed files as a new version of your site, but does not publish the modifications.</li><li><strong>Publish Project:</strong> Publishes your website, making the changes live on your domain.</li></ul></li>",2),N=e("p",null,[e("strong",null,"Screenshot of Action Bar:")],-1),R=e("a",{href:"/vpadmin/ActionBar.png",class:"zoomable-image"},[e("img",{src:g,alt:"Project Quota Progress",style:{width:"50%"}})],-1),M=n('<h3 id="publication-progress-bar" tabindex="-1">Publication Progress Bar <a class="header-anchor" href="#publication-progress-bar" aria-label="Permalink to &quot;Publication Progress Bar&quot;">​</a></h3><ul><li><p><strong>Functionality:</strong> Displays the current progress of your site publication or the result of the most recent publication.</p></li><li><p><strong>Action:</strong> Click on the &quot;+&quot; button to hide/show details about the current progress. If the current site is not publishing, the result of the last publication will be displayed. If the last publication failed, you can view the error logs.</p><video width="300" height="768" autoplay muted loop><source src="'+_+'" type="video/mp4"></video></li></ul><h3 id="file-tree" tabindex="-1">File Tree <a class="header-anchor" href="#file-tree" aria-label="Permalink to &quot;File Tree&quot;">​</a></h3>',3),B=e("li",null,[e("p",null,[e("strong",null,"Functionality:"),t(" Displays the site file structure, allowing you to navigate and select files for editing.")])],-1),O=n("<p><strong>Features:</strong></p><ul><li><strong>Navigation:</strong> Use the arrow icon to expand and collapse folders.</li><li><strong>File Selection:</strong> Click the file name to open the file in the editor.</li><li><strong>Drag and Drop:</strong> Drag and drop files to organize your site; you can also drag and drop local files to upload to your site.</li><li><strong>Context Menu:</strong> Hover over the context menu button to reveal a dropdown menu offering more node-related operations.</li></ul>",2),H=e("video",{width:"1080",height:"768",controls:"",muted:""},[e("source",{src:m,type:"video/mp4"})],-1),L=e("h3",{id:"changed-files-view",tabindex:"-1"},[t("Changed Files View "),e("a",{class:"header-anchor",href:"#changed-files-view","aria-label":'Permalink to "Changed Files View"'},"​")],-1),Q=e("p",null,[e("strong",null,"Functionality:"),t(" Displays all the files that you have modified, with a status indicator. You can also compare the changes and revert modifications.")],-1),Y=e("video",{width:"1080",height:"768",controls:"",muted:""},[e("source",{src:f,type:"video/mp4"}),t(" Your browser does not support the video tag. ")],-1),$=e("h3",{id:"version-history-view",tabindex:"-1"},[t("Version History View "),e("a",{class:"header-anchor",href:"#version-history-view","aria-label":'Permalink to "Version History View"'},"​")],-1),U=e("p",null,[e("strong",null,"Functionality:"),t(" Shows the history of your versions, allowing you to navigate through the project's version and revert your site to a specific version. Note: This will lose all changes made after this version. The system will automatically create a recovery point to save the current site state. Additionally, versions with a green icon have been published, while versions with a gray icon have not yet been published online.")],-1),J=e("video",{width:"1080",height:"768",controls:"",muted:""},[e("source",{src:v,type:"video/mp4"}),t(" Your browser does not support the video tag. ")],-1),W=n('<h2 id="resizer" tabindex="-1">Resizer <a class="header-anchor" href="#resizer" aria-label="Permalink to &quot;Resizer&quot;">​</a></h2><ul><li><p><strong>Functionality:</strong> Allows you to resize the width of the left sidebar by dragging it left or right.</p><video width="1080" height="768" autoplay muted loop><source src="'+b+'" type="video/mp4"> Your browser does not support the video tag. </video></li></ul><h2 id="main-content-area" tabindex="-1">Main Content Area <a class="header-anchor" href="#main-content-area" aria-label="Permalink to &quot;Main Content Area&quot;">​</a></h2><p>The main content area provides an interface for viewing and editing different file formats and project details.</p><h3 id="tabs" tabindex="-1">Tabs <a class="header-anchor" href="#tabs" aria-label="Permalink to &quot;Tabs&quot;">​</a></h3>',5),G=e("li",null,[e("strong",null,"Functionality:"),t(" Displays multiple open files as tabs, allowing for easy navigation.")],-1),K=e("strong",null,"Features:",-1),X=e("li",null,[e("p",null,[e("strong",null,"Tab Label:"),t(" Shows the file name and indicates unsaved or saving status using a dot and a loading indicator.")])],-1),Z=e("p",null,[e("strong",null,"Right-click Menu:"),t(" Right-click a tab to access options like: close, refresh.")],-1),ee=e("a",{href:"/vpadmin/TabContextMenu.png",class:"zoomable-image"},[e("img",{src:y,alt:"TabContextMenu",style:{width:"50%"}})],-1),te=e("h3",{id:"file-editor",tabindex:"-1"},[t("File Editor "),e("a",{class:"header-anchor",href:"#file-editor","aria-label":'Permalink to "File Editor"'},"​")],-1),oe=e("li",null,[e("p",null,[e("strong",null,"Functionality:"),t(" Provides an editor to view and edit file content based on different formats, including markdown, code, and image.")])],-1),ie=n("<p><strong>Features:</strong></p><ul><li><strong>Markdown Editor:</strong> Supports rich formatting, real-time preview, and saving of Markdown documents.</li><li><strong>Code Editor:</strong> Supports syntax highlighting and editing of code files.</li><li><strong>Image Viewer:</strong> Displays image files.</li><li><strong>Diff View:</strong> Shows the changes between two versions.</li></ul>",2),se=e("video",{width:"1080",height:"768",controls:"",muted:""},[e("source",{src:w,type:"video/mp4"}),t(" Your browser does not support the video tag. ")],-1),ne=e("h2",{id:"conclusion",tabindex:"-1"},[t("Conclusion "),e("a",{class:"header-anchor",href:"#conclusion","aria-label":'Permalink to "Conclusion"'},"​")],-1),ae=e("p",null,[t("The "),e("strong",null,"Sites Edit"),t(" page in VpAdmin provides a streamlined environment for website content management, enabling you to easily navigate your project, edit files, and deploy changes effectively, all while benefiting from robust version control and simplified publishing workflows. With its intuitive design and powerful features, you can seamlessly maintain and update your websites through VpAdmin.")],-1);function re(le,de,ce,he,ue,pe){const o=l("MagnificPopup");return d(),r("div",null,[P,S,A,C,e("ol",null,[k,j,e("li",null,[x,i(o,null,{default:s(()=>[V]),_:1})])]),F,e("ul",null,[q,e("li",null,[D,i(o,null,{default:s(()=>[E]),_:1})])]),I,e("ul",null,[z,e("li",null,[N,i(o,null,{default:s(()=>[R]),_:1})])]),M,e("ul",null,[B,e("li",null,[O,i(o,{resetOnLeave:!0,autoplayThreshold:.9},{default:s(()=>[H]),_:1})])]),L,e("ul",null,[e("li",null,[Q,i(o,{resetOnLeave:!0,autoplayThreshold:.9},{default:s(()=>[Y]),_:1})])]),$,e("ul",null,[e("li",null,[U,i(o,{resetOnLeave:!0,autoplayThreshold:.9},{default:s(()=>[J]),_:1})])]),W,e("ul",null,[G,e("li",null,[K,e("ul",null,[X,e("li",null,[Z,i(o,null,{default:s(()=>[ee]),_:1})])])])]),te,e("ul",null,[oe,e("li",null,[ie,i(o,{resetOnLeave:!0,autoplayThreshold:.9},{default:s(()=>[se]),_:1})])]),ne,ae])}const me=a(T,[["render",re]]);export{_e as __pageData,me as default};
