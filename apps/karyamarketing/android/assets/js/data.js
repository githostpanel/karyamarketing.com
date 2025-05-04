 // Function to fetch and display JSON data
 $(document).ready(function() {
    $.ajax({
        url: 'assets/json/data.json',
        dataType: 'json',
        success: function(data) {
            var output = $("#output");

            data.forEach(function(item) {
                var itemHtml = `<div>
<a href="${item.link}">
        <div style="margin-top: 14px;" class="pmd-card pmd-card-default pmd-z-depth">
            <div class="pmd-card-title">
                <div class="media-left">
                    <img style="border-radius: 8px;" width="60" height="60" src="${item.image}">
                </div>
                <div class="media-body media-middle">
                    <div class="title-app" style="">${item.title}</div>
                    <b><div style="color: #2196f3; font-size: 20px;">${item.price}</div></b>
                </div>
            </div>
        </div>
    </a></div>`;
                output.append(itemHtml);
            });
        },
        error: function(xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });
});



function filterData() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var output = document.getElementById('output');
    output.innerHTML = '';

    $.ajax({
        url: 'assets/json/data.json',
        dataType: 'json',
        success: function(data) {
            var filteredData = data.filter(function(item) {
                return item.title.toLowerCase().includes(searchTerm);
            });

            filteredData.forEach(function(item) {
                var itemHtml = `
                    <div>
                        <a href="${item.link}">
                            <div style="margin-top: 14px;" class="pmd-card pmd-card-default pmd-z-depth">
                                <div class="pmd-card-title">
                                    <div class="media-left">
                                        <img style="border-radius: 8px;" width="60" height="60" src="${item.image}">
                                    </div>
                                    <div class="media-body media-middle">
                                        <div class="title-app" style="">${item.title}</div>
                                        <b><div style="color: #2196f3; font-size: 20px;">${item.price}</div></b>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>`;
                output.innerHTML += itemHtml;
            });
        },
        error: function(xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });
}