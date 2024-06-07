// Define the content for each section
const sidebarContent = {
    linux: [
        { id: 'linux1', text: 'DAY-1', contentTitle: ' ', contentFile: '/pages/linux/linux1.html' },
        { id: 'linux2', text: 'DAY-2', contentTitle: '', contentFile: '/pages/linux/linux2.html' },
        { id: 'linux3', text: 'DAY-3', contentTitle: '', contentFile: '/pages/linux/linux3.html' },
    ],
    shellscript: [
        { id: 'shellscript1', text: 'DAY-1', contentTitle: '', contentFile: '/pages/shellscript/ss1.html' },
        { id: 'shellscript2', text: 'DAY-2', contentTitle: '', contentFile: '/pages/shellscript/ss2.html' },
        { id: 'shellscript3', text: 'DAY-3', contentTitle: '', contentFile: '/pages/shellscript/ss3.html' }
    ],
    python: [
        { id: 'python1', text: 'DAY-1', contentTitle: '', contentFile: '/pages/git/python1.html' },
        { id: 'python2', text: 'DAY-2', contentTitle: '', contentFile: '/pages/git/python2.html' },
        { id: 'python3', text: 'DAY-3', contentTitle: '', contentFile: '/pages/git/python3.html' }
    ],
    git: [
        { id: 'git1', text: 'DAY-1', contentTitle: '', contentFile: '/pages/git/git1.html' },
        { id: 'git2', text: 'DAY-2', contentTitle: '', contentFile: '/pages/git/git2.html' },
    ],
    aws: [
        { id: 'aws1', text: 'AWS1', contentTitle: 'AWS Topic 1', contentFile: 'aws1.html' },
        { id: 'aws2', text: 'AWS2', contentTitle: 'AWS Topic 2', contentFile: 'aws2.html' },
        { id: 'aws3', text: 'AWS3', contentTitle: 'AWS Topic 3', contentFile: 'aws3.html' }
    ],
    tomcat: [
        { id: 'tomcat1', text: 'Tomcat1', contentTitle: 'Tomcat Topic 1', contentFile: 'tomcat1.html' },
        { id: 'tomcat2', text: 'Tomcat2', contentTitle: 'Tomcat Topic 2', contentFile: 'tomcat2.html' },
        { id: 'tomcat3', text: 'Tomcat3', contentTitle: 'Tomcat Topic 3', contentFile: 'tomcat3.html' }
    ],
    sonarqube: [
        { id: 'sonarqube1', text: 'SonarQube1', contentTitle: 'SonarQube Topic 1', contentFile: 'sonarqube1.html' },
        { id: 'sonarqube2', text: 'SonarQube2', contentTitle: 'SonarQube Topic 2', contentFile: 'sonarqube2.html' },
        { id: 'sonarqube3', text: 'SonarQube3', contentTitle: 'SonarQube Topic 3', contentFile: 'sonarqube3.html' }
    ],
    maven: [
        { id: 'maven1', text: 'Maven1', contentTitle: 'Maven Topic 1', contentFile: 'maven1.html' },
        { id: 'maven2', text: 'Maven2', contentTitle: 'Maven Topic 2', contentFile: 'maven2.html' },
        { id: 'maven3', text: 'Maven3', contentTitle: 'Maven Topic 3', contentFile: 'maven3.html' }
    ],
    nexus: [
        { id: 'nexus1', text: 'Nexus1', contentTitle: 'Nexus Topic 1', contentFile: 'nexus1.html' },
        { id: 'nexus2', text: 'Nexus2', contentTitle: 'Nexus Topic 2', contentFile: 'nexus2.html' },
        { id: 'nexus3', text: 'Nexus3', contentTitle: 'Nexus Topic 3', contentFile: 'nexus3.html' }
    ],
    ansible: [
        { id: 'ansible1', text: 'Ansible1', contentTitle: 'Ansible Topic 1', contentFile: 'ansible1.html' },
        { id: 'ansible2', text: 'Ansible2', contentTitle: 'Ansible Topic 2', contentFile: 'ansible2.html' },
        { id: 'ansible3', text: 'Ansible3', contentTitle: 'Ansible Topic 3', contentFile: 'ansible3.html' }
    ],
    terraform: [
        { id: 'terraform1', text: 'Terraform1', contentTitle: 'Terraform Topic 1', contentFile: 'terraform1.html' },
        { id: 'terraform2', text: 'Terraform2', contentTitle: 'Terraform Topic 2', contentFile: 'terraform2.html' },
        { id: 'terraform3', text: 'Terraform3', contentTitle: 'Terraform Topic 3', contentFile: 'terraform3.html' }
    ],
    jenkins: [
        { id: 'jenkins1', text: 'Jenkins1', contentTitle: 'Jenkins Topic 1', contentFile: 'jenkins1.html' },
        { id: 'jenkins2', text: 'Jenkins2', contentTitle: 'Jenkins Topic 2', contentFile: 'jenkins2.html' },
        { id: 'jenkins3', text: 'Jenkins3', contentTitle: 'Jenkins Topic 3', contentFile: 'jenkins3.html' }
    ],
    docker: [
        { id: 'docker1', text: 'Docker1', contentTitle: 'Docker Topic 1', contentFile: 'docker1.html' },
        { id: 'docker2', text: 'Docker2', contentTitle: 'Docker Topic 2', contentFile: 'docker2.html' },
        { id: 'docker3', text: 'Docker3', contentTitle: 'Docker Topic 3', contentFile: 'docker3.html' }
    ],
    k8s: [
        { id: 'k8s1', text: 'K8s1', contentTitle: 'Kubernetes Topic 1', contentFile: 'k8s1.html' },
        { id: 'k8s2', text: 'K8s2', contentTitle: 'Kubernetes Topic 2', contentFile: 'k8s2.html' },
        { id: 'k8s3', text: 'K8s3', contentTitle: 'Kubernetes Topic 3', contentFile: 'k8s3.html' }
    ],
 
    // Add more topics here...
};

// Function to change the sidebar items
function changeSidebar(menu) {
    const sidebarList = document.getElementById('sidebar-list');
    sidebarList.innerHTML = ''; // Clear the existing sidebar items

    const items = sidebarContent[menu];
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#" onclick="changeContent('${menu}', '${item.id}')">${item.text}</a>`;
        sidebarList.appendChild(li);
    });
}

// Function to change the main content based on the sidebar item clicked
function changeContent(section, itemId) {
    const contentTitleElement = document.getElementById('content-title');
    const contentDescriptionElement = document.getElementById('content-description');
    
    // Clear existing content
    contentTitleElement.textContent = '';
    contentDescriptionElement.innerHTML = '';

    const item = sidebarContent[section].find(i => i.id === itemId);
    if (item) {
        // Append content title
        const titleNode = document.createElement('h2');
        titleNode.textContent = item.contentTitle;
        contentTitleElement.appendChild(titleNode);

        // Fetch and append content description
        fetchContent(item.contentFile)
            .then(data => {
                contentDescriptionElement.innerHTML = data;
            })
            .catch(error => console.error('Error fetching content:', error));
    }
}

// Fetch content from file
function fetchContent(contentFile) {
    return fetch(contentFile)
        .then(response => response.text());
}

// Initialize with linux sidebar by default
document.addEventListener('DOMContentLoaded', () => {
    changeSidebar('linux');
});
