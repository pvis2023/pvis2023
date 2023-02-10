window.addEventListener('load', function() {
    createFoodContent();
});

function createFoodContent() {
    var elem = document.getElementsByClassName('content-area')[0];

    inHtml = ``;

    for(var data of food_data) {
        inHtml += `
            <h2>${data['name']}</h2>
            <div style="width:100%; margin: 0 auto;">
                <img src="https://pvis2023.github.io//pvis2023/assets/images/foods/food_${data['idx']}_1.jpg" style="float:left;margin-right:10px;">
                <img src="https://pvis2023.github.io//pvis2023/assets/images/foods/food_${data['idx']}_2.jpg" style="float:left;">
            </div>
            <br>
            <div style="float:none;">
                <table>
                    <tbody>
                        <tr>
                            <td><b>Menu</b></td>
                            <td>${data['menu']}</td>
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
                        <tr>
                            <td><b>Price</b></td>
                            <td>${data['price']}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <br>
        `;
    }

    elem.innerHTML = inHtml;
}