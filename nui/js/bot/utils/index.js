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


module.exports = {
    updatePlayerCount: (client, seconds) => {
        const interval = setInterval(function setStatus() {
            let status = `${GetNumPlayerIndices()} player(s)`;
            client.user.setActivity(status, { type: "WATCHING" });

            return setStatus;
        }(), seconds * 1000);
    },

    Delay: (ms) => {
        new Promise(res => setTimeout(res, ms));
    },

    waitUntil: (condition, checkInterval = 100) => {
        return new Promise(resolve => {
            let interval = setInterval(() => {
                if (!condition()) return;
                clearInterval(interval);
                resolve();
            }, checkInterval)
        })
    }
};