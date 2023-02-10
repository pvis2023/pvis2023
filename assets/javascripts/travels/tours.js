window.addEventListener('load', function() {
    createTourContent();
});

function createTourContent() {
    var elem = document.getElementsByClassName('content-area')[0];

    inHtml = ``;

    for(var data of tour_data) {
        inHtml += `
            <h2>${data['name']}</h2>
            <div style="width:100%; margin: 0 auto;">
                <img src="https://pvis2023.github.io//pvis2023/assets/images/tours/tour_${data['idx']}_1.jpg" style="float:left;margin-right:10px;">
                <img src="https://pvis2023.github.io//pvis2023/assets/images/tours/tour_${data['idx']}_2.jpg" style="float:left;">
            </div>
            <br>
            <div style="float:none;">
                <table>
                    <tbody>
                        <tr>
                            <td><b>Type</b></td>
                            <td>${data['type']}</td>
                        </tr>
                        <tr>
                            <td><b>Address</b></td>
                            <td>${data['address']}</td>
                        </tr>
                        <tr>
                            <td><b>How to go?</b></td>
                            <td><a href="${data['map']}">Google Map</td>
                        </tr>
                        <tr>
                            <td><b>Distance</b></td>
                            <td>${data['distance']}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <br>
        `;
    }

    elem.innerHTML = inHtml;
}