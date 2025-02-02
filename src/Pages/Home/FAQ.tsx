import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const FAQ = () => {
  return (
    <div>
      <SectionTitle header={"Get Some Answere"} />
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-title text-lg font-bold hover:bg-[#003d1f] hover:text-white focus:bg-[#003d1f] focus:text-white transition-colors duration-300 rounded-md px-3 py-2">
            What payment methods do you accept?
          </AccordionTrigger>
          <AccordionContent className="font-body text-gray-700 mt-2 pl-4 border-l-4 border-[#003d1f]">
            We accept credit cards, mobile banking, debit cards, PayPal, and
            bank transfers. For more details, check our payment options page.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-title text-lg font-bold hover:bg-[#003d1f] hover:text-white focus:bg-[#003d1f] focus:text-white transition-colors duration-300 rounded-md px-3 py-2">
            Can I return or exchange a product?
          </AccordionTrigger>
          <AccordionContent className="font-body text-gray-700 mt-2 pl-4 border-l-4 border-[#003d1f]">
            Yes, you can return or exchange a product within 30 days of
            purchase. Please ensure the item is in its original condition and
            packaging.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-title text-lg font-bold hover:bg-[#003d1f] hover:text-white focus:bg-[#003d1f] focus:text-white transition-colors duration-300 rounded-md px-3 py-2">
            How long does shipping take?
          </AccordionTrigger>
          <AccordionContent className="font-body text-gray-700 mt-2 pl-4 border-l-4 border-[#003d1f]">
            Shipping usually takes 3-5 business days for domestic orders and
            7-14 business days for international orders. Expedited options are
            available.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
