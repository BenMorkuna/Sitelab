# FAQ Schema Implementation Guide

The FAQ schema has been prepared and is ready to implement when you add FAQ sections to your pages.

## How to Add FAQ Schema

### 1. Import the function
```typescript
import { createFaqSchema } from './lib/schemas';
import StructuredData from './components/StructuredData';
```

### 2. Define your FAQs
```typescript
const faqs = [
  {
    question: "What is GEO (Generative Engine Optimization)?",
    answer: "GEO is the practice of optimizing your content to appear in AI-generated search results and recommendations from ChatGPT, Perplexity, Claude, and Gemini."
  },
  {
    question: "How long does it take to see GEO results?",
    answer: "Most clients start seeing mentions in AI responses within 2-3 months of implementing our GEO strategies."
  },
  // Add more FAQs...
];
```

### 3. Add to your component
```typescript
export default function YourPage() {
  const faqs = [/* your FAQ data */];

  return (
    <div>
      <StructuredData data={createFaqSchema(faqs)} />
      {/* Rest of your page content */}

      {/* Display FAQs visually on the page */}
      <section>
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
```

## Recommended FAQ Sections

### For GEO Page (/en/geo):
- What is GEO?
- How is GEO different from SEO?
- Which AI platforms do you optimize for?
- How long does GEO take?
- Can GEO work alongside traditional SEO?

### For SEO Page (/en/seo):
- How long does SEO take to show results?
- What's included in your SEO packages?
- Do you guarantee rankings?
- How is local SEO different from national SEO?

### For Web Development Page (/en/web-development):
- What technologies do you use?
- How long does it take to build a website?
- Do you provide ongoing maintenance?
- Is hosting included?

## Schema Validation

After adding FAQs, validate your schema using:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

## SEO Benefits

FAQ schema can help your pages appear in:
- Google's "People Also Ask" sections
- Featured snippets
- Voice search results
- Rich results in SERPs
