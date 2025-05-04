	// Function to fetch and display JSON data
    async function fetchData() {
        try {
            const response = await fetch('assets/json/data.json');
            const data = await response.json();

            var output = document.getElementById("output");

            data.forEach(function (item) {
                var itemHtml = `<div>
<a href="${item.link}">
        <div style="margin-top: 14px;" class="pmd-card pmd-card-default pmd-z-depth">
            <div class="pmd-card-title">
                <div class="media-left">
                    <img style="border-radius: 8px;" width="60" height="60" src="${item.image}">
                </div>
                <div class="media-body media-middle">
                    <div style="color: #292929;">${item.title}</div>
                    <b><div style="color: #2196f3; font-size: 20px;">${item.price}</div></b>
                </div>
            </div>
        </div>
    </a></div>`;
                output.innerHTML += itemHtml;
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    