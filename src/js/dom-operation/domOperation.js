import ShowLayoutPage from './layout/showLayout';
import showCardSection from './showdata/displayCard';
var jQuery = require("jquery");

module.export = jQuery(document).ready(function () {
    let pageNum='1';
    var filterQuery='';
    let query='https://rickandmortyapi.com/api/character';  
    var nextUrl='';
    var prevUrl='';      
    let dataToDisplay;   
    var filterArray=[];   
    

    const getQueryParam= (obj)=>{
        var str = "";
        for (var key in obj) {
            if (str !== "") {
                str += "&";
            }
            str += key + "=" + encodeURIComponent(obj[key]);
        }
        return str;
    }

    const makeApiCall=function(filterArray){        
         const queryFilter=filterArray.map((item) =>(item.id+'='+item.value)).join("&")
        console.log('makeApiCall ==> queryFilter ' , queryFilter);
        let modifiedQuery='';
//search check
    const keyword= jQuery('#search-text').val();
    if(keyword){
        console.log('Search and filter both');
        modifiedQuery= query+'?name='+keyword+'&' + queryFilter;        
    }else{
        console.log('only filter !!!');
        modifiedQuery = query + '?' + queryFilter;
    }    

        //let modifiedQuery = query + '?' + queryFilter;
        console.log('makeApiCall ==> modifiedQuery ==>> ' , modifiedQuery);
        fetchData(modifiedQuery);
    }

    const fetchData=function(url){
        console.log('URL invoked is ==>> ', url);        
        fetch(url)
            .then(response => response.json())
            .then((fetchedData)=>{                 
                jQuery('#loader-spinner').addClass("hideIt");
                jQuery(".main-data").empty();
                var dataRetrieved=fetchedData.results;
                console.log('dataRetrieved is ==>> ' , dataRetrieved);     
                                     
                

                if(jQuery('#sort-dropdown')[0].selectedIndex==1){
                    console.log('Descending order display');
                    var myReverseData=[...dataRetrieved];
                    myReverseData=myReverseData.reverse();
                    dataToDisplay=myReverseData;                    
                }else{
                    console.log('Normal Ascending  order display');
                    dataToDisplay=[...dataRetrieved];                    
                }
                jQuery(".main-data").html(showCardSection(dataToDisplay));
                
                
                //Pagination work                
                nextUrl=fetchedData.info.next;
                prevUrl=fetchedData.info.prev;
                console.log('Next-URL => ' , nextUrl);
                console.log('PREV-URL => ' , prevUrl);                
                if(fetchedData.info.next){
                    jQuery('.next').parent().removeClass('disabled');                   
                }else{
                    jQuery('.next').parent().addClass('disabled');                   
                }

                if(fetchedData.info.prev){
                    jQuery('.prev').parent().removeClass('disabled');
                }else{
                    jQuery('.prev').parent().addClass('disabled');  
                }
            })
            .catch((err) => {
                    console.log('error is => ' , err)
                    jQuery('#loader-spinner').addClass("hideIt")
                 })
    }

//Create Layout Section    
    const layoutreference = new ShowLayoutPage();
    let layoutSection = layoutreference.showLayoutSection();    
    jQuery("body").append(layoutSection);
       

//call api to fetch data
fetchData(query);

//filteration code
jQuery('.form-check-input').on("click",function(event) {   
    const {id,name,value,checked}=event.target;
 
    if(checked){
        jQuery('#selected-filter').append(`<span class="btn btn-secondary px-3 py-2 mx-3" id='${"badge-"+id}' myId=${name} myName=${value}>
        ${value} <span class="badge badge-light ml-1 badge-close-icon" key="${id}">X</span>
    </span>`)
    filterArray.push({id:name,value:value});   
    }else{
        var newFilteredArray = filterArray.filter(function(element) {
            return (element.id!==name || element.value!==value)
          });
         filterArray= [...newFilteredArray];
        jQuery(`#${"badge-"+id}`).remove();        
    }
   
//api call with filtered array
console.log('filterArray : ' , filterArray);
console.log('lets call api now ');
makeApiCall(filterArray);
})     

jQuery('body').on("click",".badge-close-icon",function(event) {
 const checkBoxId= jQuery(this).attr("key");
 
 const idCheck=jQuery(this).parent().attr('myId');
 const valCheck=jQuery(this).parent().attr('myName');
 
 
 var newFilteredArray = filterArray.filter(function(element) {
    return (element.id!==idCheck || element.value!==valCheck)
  });
  filterArray= [...newFilteredArray];

 jQuery(this).parent().remove();
 jQuery('#'+checkBoxId).prop('checked',false);
 
 console.log('filterArray : ' , filterArray);
 console.log('lets call api now ');
 makeApiCall(filterArray);
})


//Pagination code

jQuery('.next').on("click",function(event) {    
    jQuery('#sort-dropdown')[0].selectedIndex=0;
    fetchData(nextUrl);    
})
jQuery('.prev').on("click",function(event) {
    jQuery('#sort-dropdown')[0].selectedIndex=0;
    fetchData(prevUrl);
})

jQuery('.search').on("click",function(event) {
    const keyword= jQuery('#search-text').val();
    let searchQueryUrl= query+'?name='+keyword;
    fetchData(searchQueryUrl);
})

jQuery('#sort-dropdown').on("change",function(event) {
    console.log('dropdown clicked and now dataToDisplay is ' , dataToDisplay);
     var reverseData=[...dataToDisplay];
    reverseData=reverseData.reverse();
    dataToDisplay=reverseData;
     jQuery(".main-data").empty();
     jQuery(".main-data").html(showCardSection(reverseData));
})

jQuery('.filterSlider').on("click",'.fa-plus-circle',function(event) {
    console.log('plus clicked!!!');   
    jQuery('.showFilterSection').removeClass('hideFilter');    
   // jQuery(".showFilterSection").slideDown("slow");
    jQuery('.fa-plus-circle').addClass('d-none');
    jQuery('.fa-minus-circle').removeClass('d-none');
})

jQuery('.filterSlider').on("click",'.fa-minus-circle',function(event) {
    console.log('minus clicked!!!');   
    jQuery('.showFilterSection').addClass('hideFilter');    
  //  jQuery(".showFilterSection").slideUp("slow");
    jQuery('.fa-minus-circle').addClass('d-none');
    jQuery('.fa-plus-circle').removeClass('d-none');
})

})

