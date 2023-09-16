let cumulativeCalories = 0;
let cumulativeCarbs = 0;
let cumulativeProtein = 0;
let cumulativeFat = 0;
let cumulativeFiber = 0;
let cumulativeSalt = 0;

function addToTable() {
    const productName = document.getElementById('productName').value;
    const weight = parseFloat(document.getElementById('weight').value) || 0;
    const carbsPer100g = parseFloat(document.getElementById('carbs').value) || 0;
    const proteinPer100g = parseFloat(document.getElementById('protein').value) || 0;
    const fatPer100g = parseFloat(document.getElementById('fat').value) || 0;
    const fiberPer100g = parseFloat(document.getElementById('fiber').value) || 0;
    const saltPer100g = parseFloat(document.getElementById('salt').value) || 0;

    const carbsWeight = (weight * carbsPer100g) / 100;
    const proteinWeight = (weight * proteinPer100g) / 100;
    const fatWeight = (weight * fatPer100g) / 100;
    const fiberWeight = (weight * fiberPer100g) / 100;
    const saltWeight = (weight * saltPer100g) / 100;

    const totalCalories = (carbsWeight * 4) + (proteinWeight * 4) + (fatWeight * 9);

    cumulativeCalories += totalCalories;
    cumulativeCarbs += carbsWeight;
    cumulativeProtein += proteinWeight;
    cumulativeFat += fatWeight;
    cumulativeFiber += fiberWeight;
    cumulativeSalt += saltWeight;

    const tableRow = `
        <tr>
            <td>${productName}</td>
            <td>${totalCalories.toFixed(2)}</td>
            <td>${carbsWeight.toFixed(2)}</td>
            <td>${proteinWeight.toFixed(2)}</td>
            <td>${fatWeight.toFixed(2)}</td>
            <td>${fiberWeight.toFixed(2)}</td>
            <td>${saltWeight.toFixed(2)}</td>
        </tr>
    `;

    document.getElementById('productTable').innerHTML += tableRow;
    document.getElementById('totalCalories').innerText = cumulativeCalories.toFixed(2);
    document.getElementById('sumCarbs').innerText = cumulativeCarbs.toFixed(2);
    document.getElementById('sumProtein').innerText = cumulativeProtein.toFixed(2);
    document.getElementById('sumFat').innerText = cumulativeFat.toFixed(2);
    document.getElementById('sumFiber').innerText = cumulativeFiber.toFixed(2);
    document.getElementById('sumSalt').innerText = cumulativeSalt.toFixed(2);
}
