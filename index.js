document.querySelectorAll('.folder-tab').forEach(tab => {
    tab.addEventListener('click', function () {
        document.querySelectorAll('.folder-tab').forEach(innerTab => innerTab.classList.remove('active'));
        document.querySelectorAll('.folder-content').forEach(content => content.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.getAttribute('data-target')).classList.add('active');
    });
});

// Set the initial active content
document.getElementById('folder-content1').classList.add('active');