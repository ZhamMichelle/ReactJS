var Row = React.createClass({



	getInitialState: function(){
		return {

			cellTop: 0,
			cellLeft: 0,

		}


	},



	createCol: function() {

		var columns = [];

		for(let i = 0; i < this.props.countCol; i++){
			columns.push(this.createCell)
		}

		return columns;


	},



	createRow: function (k) {

		return (

			<tr key={k}>
				{this.createCol().map(function(cell,key){
					return (
							cell(key)
						)
				})}
			</tr>
		)
	},



	createCell: function(k){

		return (

			<td key={k}>
				<div className="square__cell" onMouseOver={this.getMousePosition}></div>
			</td>
		)

	},


	getMousePosition: function(element){

		let coordinates = element.target.getBoundingClientRect();
		let top = coordinates.top;
		let left = coordinates.left;
		
		this.setState({
			cellTop: top,
			cellLeft: left
		})


	},



	render: function(){

			var lines = []
			for (let i = 0; i < this.props.countRow; i++) {
			lines.push(this.createRow(i))
		}


		return (

			<tbody>		
				{lines}
			</tbody>
		)
	}



})