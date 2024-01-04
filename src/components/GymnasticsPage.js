import "./style/General.css"
import "./style/GymnasticsPage.css"

import NavBar from "./NavBar";

const GymnasticsPage = () => {
    return (
        <div className="page">
            <NavBar />

            <div className="page-container">
                <div className="content">
                    {/* Header */}
                    <div id="gymnastics-header">
                        <h1> GYMNATICS </h1>
                        <h2> Brown University </h2>
                        <h2> Varsity Women's Gymnastics </h2>
                    </div>

                    <div className="gymnastics-content">
                        <p>
                            This page is generally about my accomplishments and experience since I've joined the <span className="gymnastics-link"><a href="https://brownbears.com/sports/womens-gymnastics" target="_none">Brown University Women's Gymnastics</a></span> team and
                            to show of some cool skills ;) For some background, I've been doing gymnastics
                            since I was about 7 years old. Towards the end of middle school and throughout high school,
                            I trained at <span className="gymnastics-link"><a href="https://www.brestyans.com/" target="_none">Brestyan's American Gymnastics</a></span> and now I do gymnastics at Brown.
                            So, welcome :) and
                            I hope you enjoy learning about my endeavors.
                        </p>
                    </div>

                    {/* Awards */}
                    <div class="gymnastics-bracket">
                        <h2>
                            AWARDS
                        </h2>
                    </div>
                    <div class="gymnastics-content">
                        <h3> USAG All-American Honors </h3>
                        <p>
                            At the 2022 USAG National Championships, I qualified to event finals on beam earning me
                            first team USAG All-American honors on beam, and I also earned second team USAG All-American honors on
                            vault. While competing during event finals on beam, I tied my career high score of a 9.85
                            which earned me 3rd place in the competition. Additionally, during the preliminary competition of
                            this Championship, I contributed scores on beam, vault, and floor which helped Brown Gymnastics
                            post the highest team score of the competition.
                        </p>

                        <div class="gym-figures">
                            <div class="gym-single-figure">
                                <img src="../images/gymnastics/series.gif" alt="series gif" />
                            </div>
                            <div class="gym-single-figure">
                                <img src="../images/gymnastics/layout.gif" alt="layout gif" />
                            </div>
                        </div>

                        <h3> GEC All-Conference Honors </h3>
                        <p>
                            At the 2022 GEC Conference Championships, I scored a 9.825 on value earning me a 2nd place (tie)
                            and first team All-Conference honors. Additionally, during the competition, I contributed scores on
                            vault,
                            beam, and floor which helped Brown Gymnastics earn 2nd place in the competition and break the school
                            record with a team score of 195.975.
                        </p>
                        <div class="gym-figures">
                            <div class="gym-single-figure">
                                <img src="../images/gymnastics/vault.gif" alt="GEC vault gif" />
                            </div>
                        </div>

                        <h3> Brown University Women's Gymnastics 2022 Rookie of the Year </h3>
                        <p>
                            In 2022, I was voted Rookie of the Year for Brown Gymnastics by my teammates. There were 2 Rookies of
                            the
                            Year, one first year and one second year (me). Typically, Rookie of the Year only applies to first
                            years, but
                            my class (the class of 2024) did not get this opportunity in 2021 due to COVID.
                        </p>
                    </div>

                    {/* More Skills */}
                    <div class="gymnastics-bracket">
                        <h2>
                            SOME MORE COOL SKILLS
                        </h2>
                    </div>

                    <div class="gymnastics-content">
                        <p>
                            This is definitely the best vaults I competed in the 2022 season and one of my favorite
                            memories during the whole season. I ended up earning a career high (at the time) of 9.8 on
                            the event and tied for second in the meet. I especially love this video though because of my
                            teammates at the end :)
                        </p>
                        <div class="gym-figures">
                            <div class="gym-single-figure">
                                <img src="../images/gymnastics/rutgers_vault.gif" alt="rutgers vault gif" />
                            </div>
                        </div>

                        <p>
                            In addition to beam and vault, I also competed floor. Floor is always a blast to compete
                            because it's a crowd favorite (and because my team always does my dance moves with me).
                        </p>
                        <div class="gym-figures">
                            <div class="gym-single-figure">
                                <img src="../images/gymnastics/tuck.gif" alt="double tuck gif" />
                            </div>
                            <div class="gym-single-figure">
                                <img src="../images/gymnastics/pike.gif" alt="double pike gif" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GymnasticsPage;