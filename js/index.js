/* ===================================================
 * Content toggler with min height version 1
 * =================================================== */
+(function($){
	function toggleContent(){ 
  
			var _this = this;
			/*  Here is configuration */
			this.selector        = $('.show-less'); /* hide and show content selector */
			this.btnClassName    = 'btn-content-toggler'; /* read more button class name*/
			this.rgClassName     = 'rg'; /* grediant class name */
			this.toggleClassName = 'open';  /* toggler class name on read more button */
			this.minHeight       = typeof $('.show-more').attr('data-height') !=='undefined' ? $('.show-more').attr('data-height') : 100; /* initial content height */
			this.moreTxt         = 'Read more';  /* button text initial */
			this.lessTxt         = 'Read Less'; /* button text after show all content */
			this.duration        = 500;
			this.button          = '<button class="'+ this.btnClassName +'">'+this.moreTxt+'</button>';
			
			this.init = function(){
				if($(this.selector).length > 0){
					this.limitHeight();
					this.toggleBtnTxt();
				}
			};   

			this.toggleBtnTxt = function(){
				$(document).on('click', '.'+this.btnClassName, function(e){
					if( !$(e.target).hasClass(_this.toggleClassName) ){
						_this.showContent(e.target);
						$(e.target).addClass(_this.toggleClassName);
					}else{
						_this.hideContent(e.target);
						$(e.target).removeClass(_this.toggleClassName);
					}
				}); 
			};

			this.limitHeight = function(){
				var self = this;
				
				this.selector.each(function( index ){
					var actualHeight = $(this)[0].scrollHeight;
						if( actualHeight > self.minHeight ){
								$(this)
									.css({'height' : self.minHeight, 'overflow':'hidden'});
							$(this).after(self.button);
						}else{
							$(this).addClass(self.rgClassName);
						}
				});
				
			};

			this.hideContent = function( target ){
				$(target)
					.prev()
					.animate({height : this.minHeight}, this.duration)
					.removeClass(this.rgClassName);
				$(target).text(this.moreTxt);
			};

			this.showContent = function( target ){
				$(target)
					.prev()
				  .animate({height : $(target).prev()[0].scrollHeight}, this.duration)
					.addClass(this.rgClassName);
				$(target).text(this.lessTxt);
			};

	};
	
	$(document).ready(function(){
		new toggleContent().init();	
	});
	
})(jQuery);
