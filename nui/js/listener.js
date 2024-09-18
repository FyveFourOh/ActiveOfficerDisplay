/*
-----------------------------------------------------------------------------------
                          COPYRIGHT NOTICE - DO NOT REMOVE
-----------------------------------------------------------------------------------
This file is part of Active Officer Display and Access Control [AODAC]            
Copyright (C) 2024  FyveFourOh													
                                                                                	
[AODAC] is free software: you can redistribute it and/or modify				
it under the terms of the GNU General Public License as published by				
the Free Software Foundation, either version 3 of the License, or					
(at your option) any later version.												
                                                                                	
This program is distributed in the hope that it will be useful,					
but WITHOUT ANY WARRANTY; without even the implied warranty of					
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the						
GNU General Public License for more details.										
                                                                                	
You should have received a copy of the GNU General Public License					
along with this program.  If not, see <https://www.gnu.org/licenses/>.			
                                                                                	
-----------------------------------------------------------------------------------
*/


$(function () {
    // Listen for nui toggeling
    var isSetup = false;

    // Setup Options
    var showBadge = false;
    var BorderWhiteOnly = false;

    // Setup Table baground
    var OndutyTableBGColor;

    // Setup font colors
    var OndutyTableTitleColor;
    var cityPoliceFontColor;
    var countyPoliceFontColor;
    var statePoliceFontColor;

    // Setup police department names
    var cityPoliceNameText;
    var countyPoliceNameText;
    var statePoliceNameText;


    // Set up document
    display(false, "#City-Police-container", showBadge, "#City-Police-badge");
    display(false, "#County-Police-container", showBadge, "#County-Police-badge");
    display(false, "#State-Police-container", showBadge, "#State-Police-badge");
    display(false, "#all-container", showBadge, "All");

    window.addEventListener("message", (event) => {
        var item = event.data;
        if (item.type === "StartupFillData") {
            var buildString = cityPoliceNameText + ": " + item.CityPoliceOnlineData;
            var id = document.getElementById('City-Police-amount').innerHTML = buildString;


            // All LSPD
            id = document.getElementById('all-City-Police-amount').innerHTML = buildString;


            // BCSO
            buildString = countyPoliceNameText + ": " + item.CountyPoliceOnlineData;
            id = document.getElementById('County-Police-amount').innerHTML = buildString;


            // All BCSO
            id = document.getElementById('all-County-Police-amount').innerHTML = buildString;


            // SAHP
            buildString = statePoliceNameText + ": " + item.StatePoliceOnlineData;
            id = document.getElementById('State-Police-amount').innerHTML = buildString;


            // All SAHP
            id = document.getElementById('all-State-Police-amount').innerHTML = buildString;
        }
    });

    window.addEventListener("message", (event) => {
        var item = event.data;
        if (item.type === "setup") {
            if (isSetup === false) {

                OndutyTableBGColor = item.TableBackgroundColor;
                OndutyTableTitleColor = item.TableTitleColor;

                cityPoliceFontColor = item.CityPoliceColor;
                cityPoliceNameText = item.CityPoliceName;

                countyPoliceFontColor = item.CountyPoliceColor;
                countyPoliceNameText = item.CountyPoliceName;

                statePoliceFontColor = item.StatePoliceColor;
                statePoliceNameText = item.StatePoliceName;

                BorderWhiteOnly = item.TableBorderWhite;

                if (item.badge === true) {
                    showBadge = true;
                } else { showBadge = false; }

                SetupDefaults();
                isSetup = true;
            } else {
                
            }
        }
    });

    function SetupDefaults() {

        // Build border color matching the title without transparency if not white only
        var TableBorderColor;
        var tempStringArray = String(OndutyTableBGColor).split(',');
        if (tempStringArray.length === 4 && BorderWhiteOnly === false) {
            TableBorderColor = tempStringArray[0] + ", " + tempStringArray[1] + ", " + tempStringArray[2] + ", 1";
        }

        const defaultCount = 0;

        // Gets class for Onduty table
        var buildString;
        if (showBadge === true) {
            buildString = "IN-SERVICE";
        } else {
            buildString = "IN SERVICE";
        }
        var elClass = document.getElementsByClassName("Onduty-position");

        // Sets css properites for each id in class
        var len = 0;
        len = elClass.length;
        for (let i = 0; i < len; i++) {
            var el = elClass.item(i);
            //el.style.position = "relative";
            el.style.color = OndutyTableTitleColor;
            el.style.fontFamily = '"Arial", san-serif'; // Note: "Gill Sans" does not load by default, its Arial. Check NUI dev tools if unsure ever 
            el.style.fontSize = "medium";
            el.style.fontWeight = "bolder";
            el.innerHTML = buildString;
        }

        
        // LSPD
        buildString = cityPoliceNameText + ": " + defaultCount;
        var id = document.getElementById('City-Police-amount');
        id.style.color = cityPoliceFontColor;
        id.style.textAlignLast = "justify";

        // Sets the text pos and table spacing depending on badges
        if (showBadge === false) {
            id.style.right = "0px";
        } else { // testing
            id.style.right = "11px";

            var tempID = document.getElementById('City-Onduty-table');
            tempID.style.borderSpacing = "12px";
        }
        id.innerHTML = buildString;

        // Sets the background color, also sets new border color if not white only
        id = document.getElementById('City-Onduty-table');
        id.style.backgroundColor = OndutyTableBGColor;
        if (BorderWhiteOnly === false) {
            id.style.borderColor = TableBorderColor;
        }
        

        // All LSPD
        id = document.getElementById('all-City-Police-amount')
        id.style.color = cityPoliceFontColor;
        id.style.textAlignLast = "justify";

        if (showBadge === false) {
            id.style.right = "0px";
        } else {
            id.style.right = "11px";
        }
        
        id.innerHTML = buildString;


        // BCSO
        buildString = countyPoliceNameText + ": " + defaultCount;
        id = document.getElementById('County-Police-amount')
        id.style.color = countyPoliceFontColor;
        id.style.textAlignLast = "justify";

        // Sets the text pos and table spacing depending on badges
        if (showBadge === false) {
            id.style.right = "0px";
        } else { // testing
            id.style.right = "11px";
            
            var tempID = document.getElementById('County-Onduty-table');
            tempID.style.borderSpacing = "12px";
        }
        id.innerHTML = buildString;

        // Sets the background color, also sets new border color if not white only
        id = document.getElementById('County-Onduty-table');
        id.style.backgroundColor = OndutyTableBGColor;
        if (BorderWhiteOnly === false) {
            id.style.borderColor = TableBorderColor;
        }
        

        // All BCSO
        id = document.getElementById('all-County-Police-amount')
        id.style.color = countyPoliceFontColor;
        id.style.textAlignLast = "justify";

        // Sets the text pos depending on badges
        if (showBadge === false) {
            id.style.right = "0px";
        } else {
            // adjust amount
            id.style.right = "11px";
        }
        id.innerHTML = buildString;


        // SAHP
        buildString = statePoliceNameText + ": " + defaultCount;
        id = document.getElementById('State-Police-amount')
        id.style.color = statePoliceFontColor;
        id.style.textAlignLast = "justify";

        // Sets the text pos and table spacing depending on badges
        if (showBadge === false) {
            id.style.right = "0px";
        } else { // testing
            // adjust amount
            id.style.right = "11px";

            // adjust table
            var tempID = document.getElementById('State-Onduty-table');
            tempID.style.borderSpacing = "12px";
        }
        id.innerHTML = buildString;

        // Sets the background color, also sets new border color if not white only
        id = document.getElementById('State-Onduty-table');
        id.style.backgroundColor = OndutyTableBGColor;
        if (BorderWhiteOnly === false) {
            id.style.borderColor = TableBorderColor;
        }


        // All SAHP
        id = document.getElementById('all-State-Police-amount')
        id.style.color = statePoliceFontColor;
        id.style.textAlignLast = "justify";

        // Sets the text pos depending on badges
        if (showBadge === false) {
            id.style.right = "0px";
        } else {
            id.style.right = "11px";
        }
        id.innerHTML = buildString;

        
        // Sets the table spacing to fit with badges
        if (showBadge === true) {

            id = document.getElementById('all-Onduty-table');
            id.style.borderSpacing = "12px";
        }

        // Sets the background color, also sets new border color if not white only
        id = document.getElementById('all-Onduty-table');
        id.style.backgroundColor = OndutyTableBGColor;
        if (BorderWhiteOnly === false) {
            id.style.borderColor = TableBorderColor;
        }
        
    }



    window.addEventListener("message", (event) => {
        var item = event.data;
        if (item.type === "open") {
            // Open active lspd NUI
            if (item.agency === "LSPD") {
                // open lspd
                display(true, "#City-Police-container", showBadge, "#City-Police-badge");
                
            } else if (item.agency === "BCSO") {
                display(true, "#County-Police-container", showBadge, "#County-Police-badge");
                
            } else if (item.agency === "SAHP") {
                display(true, "#State-Police-container", showBadge, "#State-Police-badge");
                
            } else if (item.agency === "ALL") {
                display(true, "#all-container", showBadge, "All");
                
            } else {

            }

        } else if (item.type === "close") {
            // Close active NUI
            if (item.agency === "LSPD") {
                // open lspd
                display(false, "#City-Police-container", showBadge, "#City-Police-badge");
            } else if (item.agency === "BCSO") {
                display(false, "#County-Police-container", showBadge,"#County-Police-badge");
            } else if (item.agency === "SAHP") {
                display(false, "#State-Police-container", showBadge, "#State-Police-badge");
            } else if (item.agency === "ALL") {
                display(false, "#all-container", showBadge, "All");
            } else {

            }
        }
    });


    window.addEventListener("message", (event) => {
        var item = event.data;
        if (item.type === "update") {
            updateCount(item.agency, item.amount);
        }
    })


    function display(show, department, badge, badgeName) {
        if (show) {
            $(department).show();
            
            if (badge) {
                if (badgeName === "All") {
                    $("#all-City-Police-badge").show();
                    $("#all-County-Police-badge").show();
                    $("#all-State-Police-badge").show();
                } else {
                    $(badgeName).show();
                }
            } else {
                $(badgeName).hide();
                $("#all-City-Police-badge").hide();
                $("#all-County-Police-badge").hide();
                $("#all-State-Police-badge").hide();
            }
        } else {
            $(department).hide();
        }
    }

    // Maybe switch agency to hold City, County, State instead of LSPD, BCSO, SAHP
    // If I did this, I would most likely update c# dictionary's to contains the 
    // config department names
    function updateCount(agency, count) {

        switch (agency) {
            case "LSPD":
                var string = cityPoliceNameText + ": " + count;

                var id = document.getElementById('City-Police-amount').innerHTML = string;
                id = document.getElementById('all-City-Police-amount').innerHTML = string;

                break;
            case "BCSO":
                var string = countyPoliceNameText + ": " + count;

                var id = document.getElementById('County-Police-amount').innerHTML = string;
                id = document.getElementById('all-County-Police-amount').innerHTML = string;

                break;
            case "SAHP":
                var string = statePoliceNameText + ": " + count;

                var id = document.getElementById('State-Police-amount').innerHTML = string;
                id = document.getElementById('all-State-Police-amount').innerHTML = string;

                break;
            default:
                //print("Failed to find department for update!");
                break;
        }
    }
})
