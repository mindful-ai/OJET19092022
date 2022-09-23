define(["knockout", "ojs/ojarraydataprovider",  
    "ojs/ojlistdataproviderview", "ojs/ojknockout","ojs/ojtable","ojs/ojinputtext"], 
    function(ko, ArrayDataProvider, ListDataProviderView,){
        function ojtableViewModel(){

            this.filter = ko.observable();
            this.baseDeptArray = [
                {
                    DepartmentId: 3,
                    DepartmentName: "ADFPM 1001 neverending",
                    LocationId: 200,
                    ManagerId: 300,
                },
                { DepartmentId: 5, DepartmentName: "BB", LocationId: 200, ManagerId: 300 },
                {
                    DepartmentId: 10,
                    DepartmentName: "Administration",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 20,
                    DepartmentName: "Marketing",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 30,
                    DepartmentName: "Purchasing",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 40,
                    DepartmentName: "Human Resources1",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 50,
                    DepartmentName: "Administration2",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 60,
                    DepartmentName: "Marketing3",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 70,
                    DepartmentName: "Purchasing4",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 80,
                    DepartmentName: "Human Resources5",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 90,
                    DepartmentName: "Human Resources11",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 100,
                    DepartmentName: "Administration12",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 110,
                    DepartmentName: "Marketing13",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 120,
                    DepartmentName: "Purchasing14",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 130,
                    DepartmentName: "Human Resources15",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 1001,
                    DepartmentName: "ADFPM 1001 neverending",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 1009,
                    DepartmentName: "BB",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 1011,
                    DepartmentName: "Administration",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 2011,
                    DepartmentName: "Marketing",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 3011,
                    DepartmentName: "Purchasing",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 4011,
                    DepartmentName: "Human Resources1",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 5011,
                    DepartmentName: "Administration2",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 6011,
                    DepartmentName: "Marketing3",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 7011,
                    DepartmentName: "Purchasing4",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 8011,
                    DepartmentName: "Human Resources5",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 9011,
                    DepartmentName: "Human Resources11",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 10011,
                    DepartmentName: "Administration12",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 11011,
                    DepartmentName: "Marketing13",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 12011,
                    DepartmentName: "Purchasing14",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 13011,
                    DepartmentName: "Human Resources15",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 14011,
                    DepartmentName: "ADFPM 1001 neverending",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 15011,
                    DepartmentName: "BB",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 21022,
                    DepartmentName: "Administration",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 22022,
                    DepartmentName: "Marketing",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 23022,
                    DepartmentName: "Purchasing",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 24022,
                    DepartmentName: "Human Resources1",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 25022,
                    DepartmentName: "Administration2",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 26022,
                    DepartmentName: "Marketing3",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 27022,
                    DepartmentName: "Purchasing4",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 28022,
                    DepartmentName: "Human Resources5",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 29022,
                    DepartmentName: "Human Resources11",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 310022,
                    DepartmentName: "Administration12",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 311022,
                    DepartmentName: "Marketing13",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 312022,
                    DepartmentName: "Purchasing14",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 313022,
                    DepartmentName: "Human Resources15",
                    LocationId: 200,
                    ManagerId: 300,
                }
            ];

            this.generateDeptArray = (num) => {
                const deptArray = [];
                let count = 0;
                for (let i = 0; i < num; i++) {
                    for (let j = 0; j < this.baseDeptArray.length; j++) {
                        deptArray[count] = Object.assign({}, this.baseDeptArray[j]);
                        deptArray[count].DepartmentId += count.toString();
                        deptArray[count].DepartmentName += count.toString();
                        count++;
                    }
                }
                return deptArray;
            };
            this.deptArray = this.generateDeptArray(2);
            console.log('[]',this.deptArray.length);

            this.handleValueChanged = () => { 
                this.filter(document.getElementById("filter").rawValue);
                console.log("Filter value changed: ", this.filter());
            };

            // this.dataProvider = new ArrayDataProvider(this.deptArray, { keyAttributes: "DepartmentId" });

            

            this.dataProvider = ko.computed(function(){
                const filterRegEx = new RegExp(this.filter(), "i");
                const filterCriterions = {
                    op: "$or",
                    criteria: [
                        { op: "$regex", value: { DepartmentId: filterRegEx } },
                        { op: "$regex", value: { DepartmentName: filterRegEx } },
                        { op: "$regex", value: { LocationId: filterRegEx } },
                        { op: "$regex", value: { ManagerId: filterRegEx } },
                    ],
                };
                const arrayDataProvider = new ArrayDataProvider(this.deptArray, { keyAttributes: "DepartmentId" });
                return new ListDataProviderView(arrayDataProvider, { filterCriterion: filterCriterions });

            }, this);

            // -------------------------------------------------------------------------------------------------------- //

            this.highlightingCellRenderer = (context) => {
                let field = null;
                if (context.columnIndex === 0) {
                    field = "DepartmentId";
                }
                else if (context.columnIndex === 1) {
                    field = "DepartmentName";
                }
                else if (context.columnIndex === 2) {
                    field = "LocationId";
                }
                else if (context.columnIndex === 3) {
                    field = "ManagerId";
                }
                let data = context.row[field].toString();
                const filterString = this.filter();
                let textNode;
                let spanNode = document.createElement("span");
                if (filterString && filterString.length > 0) {
                    const index = data.toLowerCase().indexOf(filterString.toLowerCase());
                    if (index > -1) {
                        const highlightedSegment = data.substr(index, filterString.length);
                        if (index !== 0) {
                            textNode = document.createTextNode(data.substr(0, index));
                            spanNode.appendChild(textNode);
                        }
                        let bold = document.createElement("b");
                        textNode = document.createTextNode(highlightedSegment);
                        bold.appendChild(textNode);
                        spanNode.appendChild(bold);
                        if (index + filterString.length !== data.length) {
                            textNode = document.createTextNode(data.substr(index + filterString.length, data.length - 1));
                            spanNode.appendChild(textNode);
                        }
                    }
                    else {
                        textNode = document.createTextNode(data);
                        spanNode.appendChild(textNode);
                    }
                }
                else {
                    textNode = document.createTextNode(data);
                    spanNode.appendChild(textNode);
                }
                context.parentElement.appendChild(spanNode);
            };

            this.columnArray = [
                { headerText: "Department Id", renderer: this.highlightingCellRenderer },
                { headerText: "Department Name", renderer: this.highlightingCellRenderer },
                { headerText: "Location Id", renderer: this.highlightingCellRenderer },
                { headerText: "Manager Id", renderer: this.highlightingCellRenderer },
            ];
            

        }
        
        return ojtableViewModel;
})