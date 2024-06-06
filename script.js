// Define the content for each section
const sidebarContent = {
    java: [
        { id: 'java1', text: 'JAVA1', contentTitle: 'Java Topic 1', contentDescription: 'This is the content for Java Topic 1.' },
        { id: 'java2', text: 'JAVA2', contentTitle: 'Java Topic 2', contentDescription: 'This is the content for Java Topic 2.' },
        { id: 'java3', text: 'JAVA3', contentTitle: 'Java Topic 3', contentDescription: 'This is the content for Java Topic 3.' }
    ],
    git: [
        { id: 'git1', text: 'Git and GitHub1', contentTitle: 'Git and GitHub Topic 1', contentDescription: 'This is the content for Git and GitHub Topic 1.' },
        { id: 'git2', text: 'Git and GitHub2', contentTitle: 'Git and GitHub Topic 2', contentDescription: 'This is the content for Git and GitHub Topic 2.' },
        { id: 'git3', text: 'Git and GitHub3', contentTitle: 'Git and GitHub Topic 3', contentDescription: 'This is the content for Git and GitHub Topic 3.' }
    ],
    aws: [
        { id: 'aws1', text: 'AWS1', contentTitle: 'AWS Topic 1', contentDescription: 'This is the content for AWS Topic 1.' },
        { id: 'aws2', text: 'AWS2', contentTitle: 'AWS Topic 2', contentDescription: 'This is the content for AWS Topic 2.' },
        { id: 'aws3', text: 'AWS3', contentTitle: 'AWS Topic 3', contentDescription: 'This is the content for AWS Topic 3.' }
    ],
    linux: [
        {id: 'linux1', text: 'linux1', contentTitle: 'Linux Topic 1', contentDescription: 'This is the content for LINUX Topic 1.'},
        {id: 'linux2', text: 'linux2', contentTitle: 'Linux Topic 2', contentDescription: 'This is the content for LINUX Topic 2.'},
        {id: 'linux3', text: 'linux3', contentTitle: 'Linux Topic 3', contentDescription: 'This is the content for LINUX Topic 3.'}
    ],
    shellscript: [
        {id: 'shellscript1', text: 'shellscript1', contentTitle: 'shellscript Topic 1', contentDescription: 'This is the content for shellscript Topic 1.'},
        {id: 'shellscript2', text: 'shellscript2', contentTitle: 'shellscript Topic 2', contentDescription: 'This is the content for shellscript Topic 2.'},
        {id: 'shellscript3', text: 'shellscript3', contentTitle: 'shellscript Topic 3', contentDescription: 'This is the content for shellscript Topic 3.'}
    ],
    tomcat: [
        {id: 'tomcat1', text: 'tomcat1', contentTitle: 'tomcat Topic 1', contentDescription: 'This is the content for tomcat Topic 1.'},
        {id: 'tomcat2', text: 'tomcat2', contentTitle: 'tomcat Topic 2', contentDescription: 'This is the content for tomcat Topic 2.'},
        {id: 'tomcat3', text: 'tomcat3', contentTitle: 'tomcat Topic 3', contentDescription: 'This is the content for tomcat Topic 3.'}
    ],
    sonarqube: [
        {id: 'sonarqube1', text: 'sonarqube1', contentTitle: 'sonarqube Topic 1', contentDescription: 'This is the content for sonarqube Topic 1.'},
        {id: 'sonarqube2', text: 'sonarqube2', contentTitle: 'sonarqube Topic 2', contentDescription: 'This is the content for sonarqube Topic 2.'},
        {id: 'sonarqube3', text: 'sonarqube3', contentTitle: 'sonarqube Topic 3', contentDescription: 'This is the content for sonarqube Topic 3.'}
    ],
    maven: [
        {id: 'maven1', text: 'maven1', contentTitle: 'maven Topic 1', contentDescription: 'This is the content for maven Topic 1.'},
        {id: 'maven2', text: 'maven2', contentTitle: 'maven Topic 2', contentDescription: 'This is the content for maven Topic 2.'},
        {id: 'maven3', text: 'maven3', contentTitle: 'maven Topic 3', contentDescription: 'This is the content for maven Topic 3.'}
    ],
    nexus: [
        {id: 'nexus1', text: 'nexus1', contentTitle: 'nexus Topic 1', contentDescription: 'This is the content for nexus Topic 1.'},
        {id: 'nexus2', text: 'nexus2', contentTitle: 'nexus Topic 2', contentDescription: 'This is the content for nexus Topic 2.'},
        {id: 'nexus3', text: 'nexus3', contentTitle: 'nexus Topic 3', contentDescription: 'This is the content for nexus Topic 3.'}
    ],
    ansible: [
        {id: 'ansible1', text: 'ansible1', contentTitle: 'ansible Topic 1', contentDescription: 'This is the content for ansible Topic 1.'},
        {id: 'ansible2', text: 'ansible2', contentTitle: 'ansible Topic 2', contentDescription: 'This is the content for ansible Topic 2.'},
        {id: 'ansible3', text: 'ansible3', contentTitle: 'ansible Topic 3', contentDescription: 'This is the content for ansible Topic 3.'}
    ],
    terraform: [
        {id: 'terraform1', text: 'terraform1', contentTitle: 'terraform Topic 1', contentDescription: 'This is the content for terraform Topic 1.'},
        {id: 'terraform2', text: 'terraform2', contentTitle: 'terraform Topic 2', contentDescription: 'This is the content for terraform Topic 2.'},
        {id: 'terraform3', text: 'terraform3', contentTitle: 'terraform Topic 3', contentDescription: 'This is the content for terraform Topic 3.'}
    ],
    docker: [
        {id: 'docker1', text: 'docker1', contentTitle: 'docker Topic 1', contentDescription: 'This is the content for docker Topic 1.'},
        {id: 'docker2', text: 'docker2', contentTitle: 'docker Topic 2', contentDescription: 'This is the content for docker Topic 2.'},
        {id: 'docker3', text: 'docker3', contentTitle: 'docker Topic 3', contentDescription: 'This is the content for docker Topic 3.'}
    ],
    k8s: [
        {id: 'k8s1', text: 'k8s1', contentTitle: 'k8s Topic 1', contentDescription: 'This is the content for k8s Topic 1.'},
        {id: 'k8s2', text: 'k8s2', contentTitle: 'k8s Topic 2', contentDescription: 'This is the content for k8s Topic 2.'},
        {id: 'k8s3', text: 'k8s3', contentTitle: 'k8s Topic 3', contentDescription: 'This is the content for k8s Topic 3.'}
    ],
    jenkins: [
        {id: 'jenkins1', text: 'jenkins1', contentTitle: 'jenkins Topic 1', contentDescription: 'This is the content for jenkins Topic 1.'},
        {id: 'jenkins2', text: 'jenkins2', contentTitle: 'jenkins Topic 2', contentDescription: 'This is the content for jenkins Topic 2.'},
        {id: 'jenkins3', text: 'jenkins3', contentTitle: 'jenkins Topic 3', contentDescription: 'This is the content for jenkins Topic 3.'}
    ]



};

// Function to change the sidebar items
function changeSidebar(menu) {
    const sidebarList = document.getElementById('sidebar-list');
    sidebarList.innerHTML = ''; // Clear the existing sidebar items

    const items = sidebarContent[menu];
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#" onclick="changeContent('${item.id}')">${item.text}</a>`;
        sidebarList.appendChild(li);
    });
}

// Function to change the main content based on the sidebar item clicked
function changeContent(itemId) {
    const allItems = [...sidebarContent.java, ...sidebarContent.git, ...sidebarContent.aws, 
                      ...sidebarContent.linux, ...sidebarContent.shellscript,...sidebarContent.tomcat,
                        ...sidebarContent.sonarqube,...sidebarContent.maven,...sidebarContent.nexus,
                       ...sidebarContent.ansible,...sidebarContent.terraform,...sidebarContent.docker,
                       ...sidebarContent.k8s,...sidebarContent.jenkins];
    const item = allItems.find(i => i.id === itemId);

    if (item) {
        document.getElementById('content-title').textContent = item.contentTitle;
        document.getElementById('content-description').textContent = item.contentDescription;
    }
}

// Initialize with Java sidebar by default
document.addEventListener('DOMContentLoaded', () => {
    changeSidebar('java');
});
