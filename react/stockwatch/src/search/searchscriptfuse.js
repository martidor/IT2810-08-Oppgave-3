var app = {};
var productPage;
var spreadsheetUrl = $('#spreadsheet-url').val();
var spreadsheetSheet = $('#spreadsheet-sheet').val();
var products;
var fuse;

// Settings
var ERROR_IMAGE = "/images/error.jpg";
var MAX_SEARCH_RESULTS = 20;
var fuseOptions = {
	keys: ['Navn'], // keys: ['Navn', 'Beskrivelse']
	threshold: 0.3
};

// Links to all the spreadsheets with products.



// Real-time searching in products
$( "#search-bar").on("change paste keyup", function(event) {
	// Jump to products if enter is pressed
	if (event.keyCode == 10 || event.keyCode == 13) {
        event.preventDefault();
        $(window).scrollTop($('#react').offset().top);
    }

	var result;
	var query = $(this).val();

	// Only search if query is not empty
	if ($.trim(query).length){
		result = fuse.search(query);

		// Only display n elements in the search result.
		result.splice(MAX_SEARCH_RESULTS);

	// If we are on the search in all products page, don't show all the elements when query is empty.
	} else if (spreadsheetUrl === 'all')
		result = [];
	else
		result = products;

	productPage.updateProducts(result);
});


var ProductPage = React.createClass({
	updated: false,
	getInitialState: function() {
		return this.props;
	},
	updateProducts: function(data) {
		this.updated = true;
		this.setState({data: data});
	},
	render: function() {
		if (this.updated) {
			if (this.state.data.length) var modal = <Modal data={this.state.data[0]} />;
			else if ($('#search-bar').val().length) {
				return(
					<div>
						<p>Ingen treff..</p>
					</div>
				);
			}
		}
		else var productLoader = <ProductLoader />;
		return (
			<div>
				{productLoader}
				<ProductList data={this.state.data} />
				{modal}
			</div>
		);
	}
});


var ProductList = React.createClass({
	getProducts: function() {
		return this.props.data.map(function(product, i) {
	      	return (
	      		<Product product={product} key={i} />
			);
   		});
	},

  render: function() {

    var productList = this.getProducts();
    
    return (
    	<div id="productList">
			{productList}
		</div>		
   	);	
  }
});


var Product = React.createClass({
	getInitialState: function() {
		return this.props.product;
	},
	updateModal: function() {
		$(app).trigger('productClicked', this.props.product);
	},
	render: function() {
		return (
			<div className="4u 6u(mobile) product" onClick={this.updateModal}>
				<a data-toggle="modal" data-target="#myModal" onclick="updateModal(this)" id={this.props.product.Count}>
					<section>
						<span className="image">
							<ImageFixOnError ref="image" src={this.props.product.Bilete} />
						</span>
						<div className="productInfo">
							<h3>{this.props.product.Navn}</h3>
							<p className="productPrice">{this.props.product.Pris}</p>
						</div>
					</section>
				</a>
			</div>
		);
	}
});


var ProductLoader = React.createClass({
	render: function() {
		return (
			<span id="loader"> Vennligst vent medan varene lastar inn.. <i className="fa fa-spinner fa-spin"></i></span>
		);
	}
});


var ImageFixOnError = React.createClass({
	getInitialState: function() {
		return this.props;
	},
	changeSrc: function() {
		this.setState({src: ERROR_IMAGE});
	},/*
	updateSrc: function(src) {
		this.setState({src: src});
	},*/
	componentWillReceiveProps: function(nextProps) {
		if (this.state.src !== nextProps.src)
			this.setState({src: nextProps.src});
	},
	render: function() {
		return (
			<img src={this.state.src} onError={this.changeSrc} className="productImage" alt="Produktbilde" />
		);
	}
});


var Modal = React.createClass({
	getInitialState: function() {
		return this.props;
	},
	componentDidMount: function() {
		$(app).on('productClicked', function(e, data) {
			this.setState({data: data});
			//this.refs['image'].updateSrc(data.Bilete);
		}.bind(this));
	},
	componentWillUnmount: function() {
		$(app).off('productClicked');
	},
	render: function() {
		return (
			<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h1 className="modal-title" id="myModalLabel">{this.state.data.Navn}</h1>
			        <button type="button" className="close" data-dismiss="modal">
			        	<span aria-hidden="true">&times;</span>
			        	<span className="sr-only">Close </span>
			        </button>
			      </div>
			      <div className="modal-body">
			      	<div className="modal-split">
			      		<ImageFixOnError ref="image" src={this.state.data.Bilete} />
			      	</div>
			      	<p id="modalDesc">
			        	{this.state.data.Beskrivelse}
			        </p>
			        <div className="spacer" style={{clear: 'both'}}></div>
			      </div>
			      <div className="modal-footer">
			        <span id="modalPrice" className="modal-price">{this.state.data.Pris}</span>
			        <button type="button" className="btn btn-default" data-dismiss="modal">Lukk</button>
			      </div>
			    </div>
			  </div>
			</div>
		);
	}
});


function initTabletop(){
	Tabletop.init({
		key: spreadsheetUrl,
		callback: function(data, tabletop){
			products = extractProductInfo(tabletop);
			updateProductView(false);
		},
		simpleSheet: true
	});
}


function initTabletopMultipleSpreadsheets(){

	var allProducts = [];

	function getProducts(spreadsheetUrl, done) {
  		Tabletop.init({
			key: spreadsheetUrl,
			callback: function(data, tabletop){
				var newProducts = extractProductInfo(tabletop)
				allProducts = allProducts.concat(newProducts);
				done();
			},
			simpleSheet: true
		});
	}

	// The following is called once all the products has been retrieved.
	async.forEach(spreadsheets, getProducts, function(err) {
		products = allProducts;
	    updateProductView(true);
	});
}


function extractProductInfo(tabletop){
	var extractedProducts = [];

	// Check if we have multiple sheets in the spreadsheet.
	if (typeof spreadsheetSheet === 'undefined'){
		for (var key in tabletop.models) {
			if (tabletop.models.hasOwnProperty(key)) {
				extractedProducts = extractedProducts.concat(tabletop.models[key].elements);
			}
		}
	}

	// If we only have one sheet, extract it right away.
	else extractedProducts = tabletop.models[spreadsheetSheet].elements;

	// Set product image to a default if image is not set.
	extractedProducts = extractedProducts.map(function(extractedProduct){
		if (extractedProduct.Bilete === "")
			extractedProduct.Bilete = ERROR_IMAGE;
		return extractedProduct;
	});

	return extractedProducts;
}


// Update the products
function updateProductView(isMultipleSpreadsheet){
	setProductCountMessage(products.length);
	fuse = new Fuse(products, fuseOptions);
	productPage.updateProducts( isMultipleSpreadsheet ? [] : products);

	// Add a search filter if we have a query specified in the url.
	var searchQuery = window.location.search.split("=")[1]
	if (typeof searchQuery !== "undefined")
		searchURLQuery(decodeURIComponent(searchQuery));
}


// Display message based on number of products.
function setProductCountMessage(count){
	if (! count){ 
		var text = "Varer kjem etter kvart..";
		$('.search-filter').hide();
	}
	else{
		if (count >= 20) 
			var text = "Klikk pÃ¥ ei vare for meir info. Med forbehold om utsolgte varer. ";
		else 
			var text = "Fleire varer kjem etter kvart. Klikk pÃ¥ ei vare for meir info. Med forbehold om utsolgte varer. ";

		if ($('.search-filter').length)
			text += "Filtrering av varer kan gjerast i sÃ¸keboksen."
	}

	$('#product-count').text(text);
	$('.product-list-info').addClass('visible');
}

function searchURLQuery(query){
	// perform a search and trigger the change
	$("#search-bar").val(query).trigger("change");
}


$( document ).ready(function() {
	// Initialize react.
	if($('#react.react-products').length){
		productPage = ReactDOM.render(
			<ProductPage data={[]} />, document.getElementById('react')
		);

		if (spreadsheetUrl === 'all')
			initTabletopMultipleSpreadsheets();
		else
			initTabletop();
	}
})
