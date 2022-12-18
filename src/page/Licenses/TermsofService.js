import React from "react";
import { Helmet } from "react-helmet";

import Sidebar from "../../components/Sidebar/Sidebar";

function TermsofService() {
  return (
    <div className="page">
      <Sidebar />
      <div>
        <div className="privacy">
          <Helmet>
            <title>Fern - Terms of Service</title>
          </Helmet>
          <h1>Website Terms and Conditions of Use</h1>

          <h2>
            <span className="c-secondary">1.</span> Terms
          </h2>

          <p>
            By accessing this Website, accessible from fern.fun, you are
            agreeing to be bound by these Website Terms and Conditions of Use
            and agree that you are responsible for the agreement with any
            applicable local laws. If you disagree with any of these terms, you
            are prohibited from accessing this site. The materials contained in
            this Website are protected by copyright and trade mark law.
          </p>

          <h2>
            <span className="c-secondary">2.</span> Use License
          </h2>

          <p>
            Permission is granted to temporarily download one copy of the
            materials on Fern.fun's Website for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a
            transfer of title, and under this license you may not:
          </p>

          <ul>
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose or for any public
              display;
            </li>
            <li>
              attempt to reverse engineer any software contained on Fern.fun's
              Website;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              transferring the materials to another person or "mirror" the
              materials on any other server.
            </li>
          </ul>
          <p>
            This will let Fern.fun to terminate upon violations of any of these
            restrictions. Upon termination, your viewing right will also be
            terminated and you should destroy any downloaded materials in your
            possession whether it is printed or electronic format.
          </p>

          <h2>
            <span className="c-secondary">3.</span> Disclaimer
          </h2>

          <p>
            All the materials on Fern.fun’s Website are provided "as is".
            Fern.fun makes no warranties, may it be expressed or implied,
            therefore negates all other warranties. Furthermore, Fern.fun does
            not make any representations concerning the accuracy or reliability
            of the use of the materials on its Website or otherwise relating to
            such materials or any sites linked to this Website.
          </p>

          <h2>
            <span className="c-secondary">4.</span> Limitations
          </h2>

          <p>
            Fern.fun or its suppliers will not be hold accountable for any
            damages that will arise with the use or inability to use the
            materials on Fern.fun’s Website, even if Fern.fun or an authorize
            representative of this Website has been notified, orally or written,
            of the possibility of such damage. Some jurisdiction does not allow
            limitations on implied warranties or limitations of liability for
            incidental damages, these limitations may not apply to you.
          </p>

          <h2>
            <span className="c-secondary">5.</span> Revisions and Errata
          </h2>

          <p>
            The materials appearing on Fern.fun’s Website may include technical,
            typographical, or photographic errors. Fern.fun will not promise
            that any of the materials in this Website are accurate, complete, or
            current. Fern.fun may change the materials contained on its Website
            at any time without notice. Fern.fun does not make any commitment to
            update the materials.
          </p>

          <h2>
            <span className="c-secondary">6.</span> Links
          </h2>

          <p>
            Fern.fun has not reviewed all of the sites linked to its Website and
            is not responsible for the contents of any such linked site. The
            presence of any link does not imply endorsement by Fern.fun of the
            site. The use of any linked website is at the user’s own risk.
          </p>

          <h2>
            <span className="c-secondary">7.</span> Site Terms of Use
            Modifications
          </h2>

          <p>
            Fern.fun may revise these Terms of Use for its Website at any time
            without prior notice. By using this Website, you are agreeing to be
            bound by the current version of these Terms and Conditions of Use.
          </p>

          <h2>
            <span className="c-secondary">8.</span>
            <a
              href="/privacy-policy"
              className="c-secondary"
              style={{
                textDecoration: "none",
              }}
            >
              {" "}
              Privacy Policy
            </a>
          </h2>

          <h2>
            <span className="c-secondary">9.</span> Governing Law
          </h2>

          <p>
            Any claim related to Fern.Fun's Website shall be governed by the
            laws of pl without regards to its conflict of law provisions.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              textAlign: "center",
              paddingTop: "50px",
              fontSize: "0.8rem",
            }}
          >
            <div>Last Updated: November 24, 2022</div>
            <div>
              <a
                className="c-secondary"
                style={{ textDecoration: "none", cursor: "pointer" }}
                href="https://www.termsofservicegenerator.net"
              >
                Terms Of Service Generator
              </a>
            </div>
          </div>
        </div>

        <div id="footer"></div>
      </div>
    </div>
  );
}

export default TermsofService;
