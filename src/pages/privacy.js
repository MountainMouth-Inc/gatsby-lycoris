import React from "react";

import Layout from "@components/layout.js";
import Background from "@components/background.js";
import Container from "@components/container.js";
import Seo from "@components/seo.js";
import Nav from "@components/nav.js";

const PrivacyPolicy = () => (
  <Layout>
    <Background>
      <Nav />
      <Container>
        <h1>Privacy Policy</h1>
        <p class="text-lead">
          MountainMouth (hereinafter referred to as the “Company”) is developing
          its business mainly in the field of Tech and, under the philosophy
          that the Company is in the position of being a role model for proper
          handling of personal information, as the Company recognizes the
          importance of proper handling of personal information, the Company has
          determined this Privacy Policy, and its executives and employees will
          make concerted efforts to observe this Privacy Policy. Moreover, the
          Company will make the utmost efforts to protect personal information
          and individual rights and interests thereby.
        </p>
        <div>
          <ol>
            <li>
              <h3 class="text-lead">Acquisition</h3>
              <ol class="text-lead">
                <li>
                  <p>
                    Upon acquisition of personal information, the Company will
                    specify the purpose of use of the information to the extent
                    possible, and acquire the personal information to the extent
                    necessary for achievement of the relevant purpose. The
                    Company will take necessary measures therefor.
                  </p>
                </li>
                <li>
                  <p>
                    When acquiring personal information in writing directly from
                    the principal, the Company will acquire the personal
                    information to the extent necessary after notifying the
                    principal of the name of the Company, the name of the
                    Personal Information Protection Manager and contact address
                    thereof, and purpose of use of the information, etc.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <h3 class="text-lead">Use</h3>
              <p>
                Personal information will be used within the scope of the
                purpose of use. Moreover, the Company will establish procedures
                to take necessary measures to avoid out-of-purpose use of
                personal information, and put those into practice.
              </p>
            </li>
            <li>
              <h3 class="text-lead">Management</h3>
              <p>
                The Company will manage the personal information in its
                possession by proper methods, and will not provide it to a third
                party* without the consent of the principal. *Same as the third
                parties indicated in Article 23 of the Act on the Protection of
                Personal Information
              </p>
            </li>
            <li>
              <h3 class="text-lead">Security Control Action</h3>
              <p>
                The Company will manage the personal information in its
                possession accurately and in the most current state within the
                scope necessary, depending on the purpose of use, and take
                reasonable safety measures for risks of leaks, destruction/loss
                or damage of personal information etc. striving to lessen risks
                and correct the measures.
              </p>
            </li>
            <li>
              <h3 class="text-lead">Consignment of handling</h3>
              <p>
                If the Company outsources handling of personal information, the
                Company will obligate contractors in agreements not to leak or
                provide personal information to a third party, etc., and carry
                out the proper management of contractors.
              </p>
            </li>
            <li>
              <h3 class="text-lead">Anonymously processed information</h3>
              <ol>
                <li>
                  <p>
                    If the Company creates anonymously processed information,
                    the Company will process it appropriately in accordance with
                    the law and at the same time take appropriate security
                    control actions.
                  </p>
                </li>
                <li>
                  <p>
                    If the Company provides anonymously processed information,
                    the Company will release the information in a timely and
                    appropriate manner as required by law.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <h3 class="text-lead">Pseudonymously Processed Information</h3>
              <p>
                The Company creates pseudonymously processed information
                (information about an individual that has been processed in such
                a way that the individual cannot be identified unless
                cross-checked with other information). In accordance with laws
                and regulations, the Company will process information
                appropriately and take security management measures when
                creating pseudonymously processed information. As for the
                purposes of use, the Company will use pre-processed personal
                information for the purposes listed in the &quot;Handling of
                Personal Information&quot; below. In addition, the Company will
                use pseudonymously processed information for the purposes of (1)
                research and development of new businesses, services, or
                products, and (2) analysis and integration of data across
                services.
              </p>
            </li>
            <li>
              <h3 class="text-lead">Response to inquiries</h3>
              <p>
                The Company will respond to complaints and consultations
                regarding personal information in its possession by being
                notified at the inquiry contact window of the Company.
              </p>
            </li>
            <li>
              <h3 class="text-lead">Legal compliance</h3>
              <p>
                The Company will comply with the laws and regulations,
                guidelines and other codes provided by the government with
                respect to handling of personal information.
              </p>
            </li>
            <li>
              <h3 class="bold">
                Review of management system development and operation
              </h3>
              <p>
                The Company will provide a personal information protection
                management system, reexamine it regularly, and improve it on a
                continuous basis.
              </p>
            </li>
          </ol>
        </div>
        <div class="row flex-right">
          <p class="align-bottom">
            Established April 1, 2021 Revised April 1, 2022 MountainMouth
            syamaguc President and CEO
          </p>
          <p class="align-bottom">privacy@mountainmouth.xyz</p>
        </div>
      </Container>
    </Background>
  </Layout>
);

export const Head = () => <Seo title="Privacy Policy"></Seo>;

export default PrivacyPolicy;
