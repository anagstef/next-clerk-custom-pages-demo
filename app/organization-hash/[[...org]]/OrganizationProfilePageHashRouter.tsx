'use client';

import { OrganizationProfile } from "@clerk/clerk-react";
import { ColorThemePage } from "../../components/ColorThemePage";
import { TermsPage } from "../../components/TermsPage";

export const OrganizationProfilePageHashRouter = () => {
    return (
        <div style={{border: '1px solid black', margin: '50px'}}>
            <div>Organization Profile with Hash Router</div>
            <OrganizationProfile>
                <OrganizationProfile.Page label='Color Theme' url='theme' labelIcon={<span>🎨</span>}>
                    <ColorThemePage />
                </OrganizationProfile.Page>
                <OrganizationProfile.Page label='Terms' url='terms' labelIcon={<span>📝</span>}>
                    <TermsPage />
                </OrganizationProfile.Page>
                <OrganizationProfile.Link label="Go Back" url="/" labelIcon={<span>🔙</span>} />
            </OrganizationProfile>
        </div>
      );
};