# Usage

```bash
 <Table tableData={tableData} pagination={true} />
```

## Props:

### tableData

```bash {
columns: [
	{
		name:'TEST DATA',
		fieldName:'testData'
	},
	{
		name:'New Data',
		fieldName:'newData'
	}
]
data:[{testData: 'Hello', newData: 'Hi'}, {testData: 'OLA', newData: 'Bonjour'}]
```

### pagination: Boolean <Default: false> - Shown pagination control at bottom of table

### downloadName: string <Optional> - Give custom name for your csv downloads of table data

### tableHeight: string - Height of the table - preferably in **'rem'** unit

## Adding Styles in cells

### Style th:

    add 'thStyle': object to the columns object.

### Style td:

    add 'tdStyle': object to the columns object

### Add class name to th

    add 'thClass': String to the columns object

### Add class name to td

    add 'tdClass': String to the columns object

example:

```bash
tableData = {
columns: [{
		name:'TEST DATA',
		fieldName:'testData',
		thStyle: {
			'text-align': 'right'
		},
		tdStyle: {
			'text-align': 'center'
		}
		thClass: 'class-a class-b',
		tdClass: 'class-x class-y'
	]
	data:[{testData: 'Hello', newData: 'Hi'}, {testData: 'OLA', newData: 'Bonjour'}]
}
```
