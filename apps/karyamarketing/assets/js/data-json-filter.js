  function renderItems(items) {
            var output = document.getElementById('output');
            output.innerHTML = '';

            items.forEach(function(item) {
                var itemHtml = `
                    <div>
                        <a href="${item.link}">
                            <div style="margin-top: 14px;" class="pmd-card pmd-card-default pmd-z-depth">
                                <div class="pmd-card-title">
                                    <div class="media-left">
                                        <img style="border-radius: 8px;" width="60" height="60" src="${item.image}">
                                    </div>
                                    <div class="media-body media-middle">
                                        <div class="title-app">${item.title}</div>
                                        <b><div style="color: #2196f3; font-size: 20px;">${item.price}</div></b>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>`;
                output.innerHTML += itemHtml;
            });
        }

        function fetchData() {
            $.ajax({
                url: 'assets/json/data.json',
                dataType: 'json',
                success: function(data) {
                    renderItems(data);
                },
                error: function(xhr, status, error) {
                    console.error('Error fetching data:', error);
                }
            });
        }

        function filterData() {
            var searchTerm = document.getElementById('searchInput').value.toLowerCase();

            $.ajax({
                url: 'assets/json/data.json',
                dataType: 'json',
                success: function(data) {
                    var filteredData = data.filter(function(item) {
                        return item.title.toLowerCase().includes(searchTerm);
                    });
                    renderItems(filteredData);
                },
                error: function(xhr, status, error) {
                    console.error('Error fetching data:', error);
                }
            });
        }