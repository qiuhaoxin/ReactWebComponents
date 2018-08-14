import {isEmtpy} from '../../utils/util';

function defaultGetRowData(
   dataBlob,
   sectionID,
   rowID
){
	return dataBlob[sectionID][rowID];
}

function defaultGetSectionHeaderData(
   dataBlob,
   sectionID
){
	return dataBlob[sectionID];
}


class ListViewDataSource{

	constructor(params){
		this._rowHasChanged=params.rowHasChanged;
		this._getRowData=params.getRowData || defaultGetRowData;
		this._sectionHeaderHasChanged=params.sectionHeaderHasChanged;
		this._getSectionHeaderData=params.getSectionHeaderData||defaultGetSectionHeaderData;
		this._dataBlob=null;
		this._dirtyRows=[];
        this._dirtySections=[];
        this._cachedRowCount=0;
        this.rowIdentities=[];

        this.sectionIdentities=[];
	}

	cloneWithRows(
       dataBlob,
       rowIdentities
	){
        const rowIds=rowIdentities ? [rowIdentities] : null;
        if(!this._sectionHeaderHasChanged){
        	this._sectionHeaderHasChanged=()=>false;
        }
        return this.cloneWithRowsAndSections({s1:dataBlob},['s1'],rowIds);
	}

	cloneWithRowsAndSections(
       dataBlob,
       sectionIdentities,
       rowIdentities
	){
	    const newSource=new ListViewDataSource({
	    	getRowData:this._getRowData,
	    	getSectionHeaderData:this._getSectionHeaderData,
	    	rowHasChanged:this._rowHasChanged,
	    	sectionHeaderHasChanged:this._sectionHeaderHasChanged,
	    });
	    newSource._dataBlob=dataBlob;
	    if(sectionIdentities){
	    	newSource.sectionIdentities=sectionIdentities;
	    }else{
	    	newSource.sectionIdentities=Object.keys(dataBlob);
	    }

	    if(rowIdentities){
	    	newSource.rowIdentities=rowIdentities;
	    }else{
	    	newSource.rowIdentities=[];
	    	newSource.sectionIdentities.forEach(sectionID=>{
	    		newSource.rowIdentities.push(Object.keys(dataBlob[sectionID]))
	    	})
	    }
	    newSource._cachedRowCount=countRows(newSource.rowIdentities);
	    newSource._calculateDirtyArrays(
           this._dataBlob,
           this.sectionIdentities,
           this.rowIdentities
	    );
        return newSource;
	}

	getRowCount(){
		return this._cachedRowCount;
	}

	getRowAndSectionCount(){
		return (this._cachedRowCount + this.sectionIdentities.length);
	}

	rowShouldUpdate(sectionIndex,rowIndex){
		var needUpdate=this._dirtyRows[sectionIndex][rowIndex];
		return needsUpdate;
	}

	getRowData(sectionIndex,rowIndex){
		var sectionID=this.sectionIdentities[sectionIndex];
		var rowID=this.rowIdentities[sectionIndex][rowIndex];

		return this._getRowData(this._dataBlob,sectionID,rowID);
	}


	getRowIDForFlatIndex(index){
		let accessIndex=index;
		for(let ii=0;ii<this.sectionIdentities.length;ii++){
			if(accessIndex>=this.rowIdentities[ii].length){
				accessIndex-=this.rowIdentities[ii].length;
			}else{
				return this.rowIdentities[ii][accessIndex];
			}
		}
		return null;
	}

	getSectionLengths(){
		var results=[];
		for(var ii=0;ii<this.sectionIdentities.length;ii++){
			results.push(this.rowIdentities[ii].length);
		}
		return results;
	}


	sectionHeaderShouldUpdate(sectionIndex){
        var needsUpdate=this._dirtySections[sectionIndex];

        return needsUpdate;
	}

	getSectionHeaderData(sectionIndex){
		if(!this._getSectionHeaderData){
			return null;
		}
		var sectionID=this.sectionIdentities[sectionIndex];

		return this._getSectionHeaderData(this._dataBlob,sectionID);
	}

	_getRowData;
	_getSectionHeaderData;
	_rowHasChanged;
	_sectionHeaderHasChanged;
	_dataBlob;
	_dirtyRows;
	_dirtySections;
	_cachedRowCount;
	rowIdentities;
	sectionIdentities;

    _calculateDirtyArrays(
	    prevDataBlob,
	    prevSectionIDs,
	    prevRowIDs
	) {
	    // construct a hashmap of the existing (old) id arrays
	    var prevSectionsHash = keyedDictionaryFromArray(prevSectionIDs);
	    var prevRowsHash = {};
	    for (var ii = 0; ii < prevRowIDs.length; ii++) {
	      var sectionID = prevSectionIDs[ii];
	      warning(
	        !prevRowsHash[sectionID],
	        'SectionID appears more than once: ' + sectionID
	      );
	      prevRowsHash[sectionID] = keyedDictionaryFromArray(prevRowIDs[ii]);
	    }

	    // compare the 2 identity array and get the dirtied rows
	    this._dirtySections = [];
	    this._dirtyRows = [];

	    var dirty;
	    for (var sIndex = 0; sIndex < this.sectionIdentities.length; sIndex++) {
	      var sectionID = this.sectionIdentities[sIndex];
	      // dirty if the sectionHeader is new or _sectionHasChanged is true
	      dirty = !prevSectionsHash[sectionID];
	      var sectionHeaderHasChanged = this._sectionHeaderHasChanged;
	      if (!dirty && sectionHeaderHasChanged) {
	        dirty = sectionHeaderHasChanged(
	          this._getSectionHeaderData(prevDataBlob, sectionID),
	          this._getSectionHeaderData(this._dataBlob, sectionID)
	        );
	      }
	      this._dirtySections.push(!!dirty);

	      this._dirtyRows[sIndex] = [];
	      for (var rIndex = 0; rIndex < this.rowIdentities[sIndex].length; rIndex++) {
	        var rowID = this.rowIdentities[sIndex][rIndex];
	        // dirty if the section is new, row is new or _rowHasChanged is true
	        dirty =
	          !prevSectionsHash[sectionID] ||
	          !prevRowsHash[sectionID][rowID] ||
	          this._rowHasChanged(
	            this._getRowData(prevDataBlob, sectionID, rowID),
	            this._getRowData(this._dataBlob, sectionID, rowID)
	          );
	        this._dirtyRows[sIndex].push(!!dirty);
	      }
	    }
	  
	}
}

function countRows(allRowIDs){
	let totalRows=0;
	for(let sectionIdx=0;sectionIdx<allRowIDs.length;sectionIdx++){
       const rowIDs=allRowIDs[sectionIdx];
       totalRows+=rowIDs.length;
	}
	return totalRows;
}

function keyedDictionaryFromArray(arr){
   let result={};
   for(let ii=0;ii<arr.length;ii++){
   	  const key=arr[ii];
   	  result[key]=true;
   }
   return result;
}

export default ListViewDataSource;