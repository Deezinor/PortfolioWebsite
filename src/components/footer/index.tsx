import {
  Footer as FlowbiteFooter, // Rename imported Footer to FlowbiteFooter to avoid conflict
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup
} from "flowbite-react";

export function Footer() {  // Now you can name your component Footer
  return (
    <FlowbiteFooter container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="https://jake-boulton.netlify.app"
            src="./src/assets/images/favicon.ico"
            alt="Flowbite Logo"
            name="Jake Boulton"
          />
          <FooterLinkGroup>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Jake Boulton" year={2024} />
      </div>
    </FlowbiteFooter>
  );
}

export default Footer;  // Export your renamed Footer component as default
