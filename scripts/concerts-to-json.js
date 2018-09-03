"use strict";

const table = `<tr><td>15.9.2017</td><td>20:00</td><td>Kladno</td><td>Poldofka</td><td></td><td><a href="https://www.facebook.com/events/1781350551880630/" target="_blank">facebook</a></td>    </tr>
    <tr><td>24.6.2017</td><td>15:00</td><td>Stehelčeves</td><td>Hřiště</td><td></td><td><a href="https://www.facebook.com/events/1843999425922228/" target="_blank">facebook</a></td>    </tr>
    <tr><td>18.3.2017</td><td>18:00</td><td>Kladno</td><td>Poldofka</td><td></td><td><a href="https://www.facebook.com/events/1591453767812068/" target="_blank">facebook</a></td>    </tr>
    <tr><td>7.1.2017</td><td>19:30</td><td>Plzeň</td><td>Jam Club</td><td>100,-</td><td><a href="https://www.facebook.com/events/1307586615932422/" target="_blank">facebook</a></td>    </tr>
    <tr><td>15.10.2016</td><td>19:00</td><td>Kladno</td><td>Poldofka</td><td>80,-</td><td><a href="https://www.facebook.com/events/1112728405467058/" target="_blank">facebook</a></td>    </tr>
    <tr><td>16.4.2016</td><td>18:30</td><td>Kladno</td><td>Poldofka</td><td>(předprodej) 250,-</td><td><a href="https://www.facebook.com/events/942792505783701/" target="_blank">facebook</a></td>    </tr>
    <tr><td>30.10.2015</td><td></td><td>Kladno</td><td>Poldofka</td><td>-</td><td><a href="http://bandzone.cz/koncert/388804-kladno-poldofka-black-hill-dexor-a-avoid" target="_blank">bandzone</a></td>    </tr>
    <tr><td>16.10.2015</td><td></td><td>Libochovice</td><td>-</td><td>-</td><td><a href="http://bandzone.cz/koncert/387495-libochovice-propan-butan-a-dexor" target="_blank">bandzone</a></td>    </tr>
    <tr><td>18.7.2015</td><td>18:00</td><td>Lhota, u Staré Boleslavy</td><td>Hřiště</td><td></td><td><a href="http://bandzone.cz/koncert/380917-lhota-hriste-rock-metalova-lhota" target="_blank">bandzone</a></td>    </tr>
    <tr><td>23.5.2015</td><td>19:00</td><td>Ocelářská, Kladno</td><td>Auto Da Fé</td><td>100,-</td><td><a href="http://bandzone.cz/koncert/380161-kladno-auto-da-fe-hard-and-heavy-vecer-na-kladne" target="_blank">bandzone</a></td>    </tr>
    <tr><td>25.4.2015</td><td>20:00</td><td>Úvaly</td><td>hospoda na fot. hřišti</td><td>dobrovolné</td><td><a href="http://bandzone.cz/koncert/375935-uvaly-hospoda-na-fot-hristi-uvalska-metal-party-vol-1" target="_blank">bandzone</a></td>    </tr>
    <tr><td>14.3.2015</td><td>20:00</td><td>Rakovník</td><td>klub Astacus</td><td>90 Kč</td><td>Moto Club Astacus <a href="http://www.astacus.cz/" target="_blank">http://www.astacus.cz/</a></td>    </tr>
    <tr><td>7.2.2015</td><td>19:00</td><td>Kladno</td><td>klub Poldofka</td><td></td><td></td>    </tr>
    <tr><td>28.11.2014</td><td>20:00</td><td>Slaný, Ouvalova 333</td><td>klub RockPUBlica</td><td></td><td><a href="http://bandzone.cz/koncert/358561-slany-rockpublica-h-i-m-y-m-tour-slany" target="_blank">bandzone</a></td>    </tr>
    <tr><td>22.11.2014</td><td>20:00</td><td>Kamenné Zboží u Nymburka</td><td>hostinec U Málků</td><td>100,-</td><td><a href="http://bandzone.cz/koncert/359217-kamenne-zbozi-hostinec-u-malku-zhruba-vol-6" target="_blank">bandzone</a></td>    </tr>
    <tr><td>20.9.2014</td><td>18:00</td><td>Kladno</td><td>klub Poldofka</td><td></td><td><a href="http://bandzone.cz/koncert/336131-kladno-poldofka-party-massacre-vol-2" target="_blank">bandzone</a></td>    </tr>
    <tr><td>13.9.2014</td><td>16:00</td><td>Třebusice u Kladna</td><td>zahrada místní restaurace</td><td></td><td><a href="http://bandzone.cz/koncert/352896-trebusice-zahrada-mistni-restaurace-methanolove-odpoledne" target="_blank">bandzone</a></td>    </tr>
    <tr><td>16.8.2014</td><td>18:30</td><td>Řevničov</td><td>fotbalové hřiště</td><td></td><td><a href="http://bandzone.cz/koncert/352251-revnicov-fotbalove-hriste-spartafest-2014" target="_blank">bandzone</a></td>    </tr>
    <tr><td>19.4.2014</td><td>19:05</td><td>Kladno</td><td>klub Poldofka</td><td></td><td></td>    </tr>
    <tr><td>12.4.2014</td><td>20:00</td><td>Beroun</td><td>RC Prdel</td><td></td><td></td>    </tr>
    <tr><td>14.2.2014</td><td>20:00</td><td>Sokolovská 195, Praha</td><td>Exit-Us</td><td>dobrovolné</td><td></td>    </tr>
    <tr><td>18.1.2014</td><td>19:30</td><td>Ocelárenská, Kladno</td><td>Auto Da Fé</td><td></td><td>Křest debutového CD Život je boj</td>    </tr>
    <tr><td>14.12.2013</td><td>20:00</td><td>Želenice</td><td>Hospůdka Želenice</td><td>50,-</td><td></td>    </tr>
    <tr><td>2.8.2013</td><td>18:00</td><td>Tři Dvory u Kolína</td><td>přírodní koupaliště</td><td>100,-</td><td></td>    </tr>
    <tr><td>23.3.2013</td><td>20:45</td><td>Kralupy nad Vltavou</td><td>Klub Ponorka</td><td></td><td></td>    </tr>
    <tr><td>9.3.2013</td><td>17:00</td><td>Ocelárenská, Kladno</td><td>Auto Da Fé</td><td>40,-</td><td></td>    </tr>
    <tr><td>1.2.2013</td><td>20:00</td><td>Ouvalova Ouvalova/333, Slaný</td><td>RockPUBlica</td><td></td><td></td>    </tr>
    <tr><td>19.1.2013</td><td>19:00</td><td>Rokycanova 29, Praha 3 - Žižkov</td><td>XT3</td><td>60,-</td><td></td>    </tr>
    <tr><td>15.12.2012</td><td>18:30</td><td>Brandýsek</td><td>Hospoda U Kožených</td><td>dobrovolné</td><td></td>    </tr>
    <tr><td>25.8.2012</td><td>19:00</td><td>Řevničov</td><td>fotbalové hřiště</td><td></td><td></td>    </tr>
    <tr><td>26.5.2012</td><td>19:30</td><td>Ocelárenská, Kladno</td><td>Auto Da Fé</td><td>80,-</td><td>První koncert DEXOR!</td>    </tr>`;

const concerts = table
    .split('\n')
    .map((line) => {
        line = line.replace(/<tr>/, '').replace(/<\/tr>/g, '').trim();
        const matches = line.match(/<td>(.*?)<\/td>/g);
        let [date, time, place, club, fee, description] = matches
            .map((result) => result.replace(/<td>(.*?)<\/td>/, '$1'));
        const link = /http/.test(description) ? description : undefined;
        const [day, month, year] = date.split('.');
        const normMonth = '00'.substr(0, 2 - month.length) + month;
        const normDay = '00'.substr(0, 2 - day.length) + day;
        const dateString = `${year}-${normMonth}-${normDay}T${time || '19:00'}:00.000Z`;
        return {
            date: new Date(dateString),
            place,
            club,
            fee: fee ? Number.parseInt(fee.replace(',-', '')) : undefined,
            link: link ? link.replace(/.*href="(.*?)".*/, '$1') : undefined
        };
    });

console.log(JSON.stringify(concerts, null, 2));