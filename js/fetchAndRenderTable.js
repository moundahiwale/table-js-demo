var _table_ = document.createElement('table'),
  _tr_ = document.createElement('tr'),
  _th_ = document.createElement('th'),
  _td_ = document.createElement('td');

// Builds the HTML Table out of myList json data from Ivy restful service.
function buildHtmlTable(arr) {
  var table = _table_.cloneNode(false),
    columns = addAllColumnHeaders(arr, table);
  for (var i = 0, maxi = arr.length; i < maxi; ++i) {
    var tr = _tr_.cloneNode(false);
    for (var j = 0, maxj = columns.length; j < maxj; ++j) {
      var td = _td_.cloneNode(false);
      cellValue = arr[i][columns[j]];
      td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  return table;
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records
function addAllColumnHeaders(arr, table) {
  var columnSet = [],
    tr = _tr_.cloneNode(false);
  for (var i = 0, l = arr.length; i < l; i++) {
    for (var key in arr[i]) {
      if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key) === -1) {
        columnSet.push(key);
        var th = _th_.cloneNode(false);
        th.appendChild(document.createTextNode(key));
        tr.appendChild(th);
      }
    }
  }
  table.appendChild(tr);
  return columnSet;
}

document.body.appendChild(
  buildHtmlTable([
    {
      id: 1,
      first_name: 'Dill',
      email: 'dpackham0@tamu.edu',
      Info: 'China',
    },
    {
      id: 2,
      first_name: 'Liz',
      email: 'lovanesian1@fastcompany.com',
      Info: 'Argentina',
    },
    {
      id: 3,
      first_name: 'Johannes',
      email: 'jnarey2@merriam-webster.com',
      Info: 'Ukraine',
    },
    {
      id: 4,
      first_name: 'Adelbert',
      email: 'ahulks3@tinyurl.com',
      Info: 'Poland',
    },
    {
      id: 5,
      first_name: 'Shanta',
      email: 'scram4@4shared.com',
      Info: 'Mexico',
    },
    {
      id: 6,
      first_name: 'Hazel',
      email: 'hjiras5@tinypic.com',
      Info: 'Tanzania',
    },
    {
      id: 7,
      first_name: 'Iggie',
      email: 'isteffans6@washingtonpost.com',
      Info: 'Libya',
    },
    {
      id: 8,
      first_name: 'Urbano',
      email: 'uconville7@sitemeter.com',
      Info: 'Indonesia',
    },
  ])
);
