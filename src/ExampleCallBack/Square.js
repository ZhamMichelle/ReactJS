var Square = React.createClass({


	getInitialState: function () {

		return {

		countRow: 4,
		countCol: 4,
		mouseOnTable: false,
		onDelRow: false,
		onDelCol: false

		}

	},


	appendCol: function() {

		var countColNew = this.state.countCol + 1;

		this.setState({countCol: countColNew});  //change initiale state "countCol" (add new column)

		//console.log(this.state.countCol)

	},

	appendRow: function() {

		var countRowNew = this.state.countRow + 1;

		this.setState({countRow: countRowNew});  //change initiale state "countRow" (add new row)

		//console.log(this.state.countRow)

	},

	deleteCol: function() {

		var countColNew = this.state.countCol - 1;

		this.setState({countCol: countColNew});  //change initiale state "countCol" (delete col)

		//console.log(this.state.countCol)

	},

	deleteRow: function() {

		var countRowNew = this.state.countRow - 1;

		this.setState({countRow: countRowNew});  //change initiale state (delete row)

		//console.log(this.state.countRow)

	},


	hiddenButtons: function(){
		var mouseOnTableNew = true;
		this.setState({mouseOnTable: mouseOnTableNew})
	},


	showButtons: function(){
		var mouseOnTableNew = false;
		this.setState({mouseOnTable: mouseOnTableNew})
	},



	render: function() {

		var timeOut;


		return (

			<div className='square'>

				<table className='square__table'
						 onMouseOver={this.hiddenButtons}						 									
						 onMouseLeave={() => {timeOut=setTimeout(this.showButtons,200)}}>


							<Row countRow={this.state.countRow}
								 countCol={this.state.countCol}
								 ref={(ref) => this.state}

								 />		


				</table>


							<button className="square__button square__button_append square__button_col-append"
									onClick={this.appendCol}>
							</button>


					        <button className="square__button square__button_delete square__button_col-delete" 
					        		style={this.state.countCol===1 ||
					        			   this.state.mouseOnTable===false ||
					        			   this.state.onDelRow===true ? {visibility: "hidden"} : {visibility: "visible"}}

					        		onClick={this.deleteCol}
					        		onMouseOver={() => {clearTimeout(timeOut);
					        							this.setState({onDelCol:true})}}
					        		onMouseLeave={() => {this.setState({onDelCol:false})}}>
					        </button>


					        <button className="square__button square__button_append square__button_row-append" 
					        		onClick={this.appendRow}>
					        </button>


					        <button className="square__button square__button_delete square__button_row-delete"
					        		style={this.state.countRow===1 ||
					        			   this.state.mouseOnTable===false ||
					        			   this.state.onDelCol===true ? {visibility: "hidden"} : {visibility: "visible"}} 

					        		onClick={this.deleteRow}

					        		onMouseOver={() => {clearTimeout(timeOut);
					        							this.setState({onDelRow:true})}}

					        		onMouseLeave={() => {this.setState({onDelRow:false})}}>
					        </button>



				

			</div>


		)

	}

})


//==================================================


