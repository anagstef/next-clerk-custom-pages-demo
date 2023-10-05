'use client';

import { ColorThemePage } from "@/app/components/ColorThemePage";
import { TermsPage } from "@/app/components/TermsPage";
import { OrganizationProfile } from "@clerk/nextjs";

export const OrganizationProfilePageReorderedHashRouter = () => {
    return (
        <div style={{border: '1px solid black', margin: '50px'}}>
            <div>Organization Profile Reordered with Hash Router</div>
            <OrganizationProfile>
                <OrganizationProfile.Page label='Color Theme' url='theme' labelIcon={<span>🎨</span>}>
                    <ColorThemePage />
                </OrganizationProfile.Page>
                <OrganizationProfile.Page label="members" />
                <OrganizationProfile.Page label="settings" />
                <OrganizationProfile.Page label='Terms' url='terms' labelIcon={<span>📝</span>}>
                    <TermsPage />
                </OrganizationProfile.Page>
                <OrganizationProfile.Link label="Go Back" url="/" labelIcon={<span>🔙</span>} />
            </OrganizationProfile>
        </div>
      );
};