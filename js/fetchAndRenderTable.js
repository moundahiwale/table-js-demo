document.getElementById('data-table').innerHTML = `<tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
    <th>...</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
    <td><i class="fa fa-plus"></i></td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
    <td><i class="fa fa-plus"></i></td>
  </tr>`;

const td = document.createElement('td');
td.innerHTML = '<i class="fa fa-plus"></i>';
// td.textContent = '<i class="fa fa-plus"></i>';
document.body.appendChild(td);

const arr = [1, 2, 3];
console.log(arr[0], 'zero');
console.log(arr[1], 'one');
console.log(arr[2], 'second');

const oZero = {
  id: 1,
  name: 'test',
};
const oOne = {
  id: 2,
  name: 'name is',
};

const objArray = [oZero, oOne];
console.log(objArray);
