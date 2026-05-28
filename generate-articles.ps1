$blogDir = 'D:\Ajit Mane\blog'

$shellTop = @'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BLOG_TITLE — Travel Insurance Info</title>
  <meta name="description" content="BLOG_DESC">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
  <div class="top-bar">
    <div class="container">
      <span>&#9432; Informational Website — IRDAI Compliant. We do not sell insurance.</span>
      <a href="https://www.irdai.gov.in" target="_blank" rel="noopener">Visit IRDAI &rarr;</a>
    </div>
  </div>
  <nav class="navbar">
    <div class="nav-container">
      <a href="../index.html" class="logo">
        <span class="logo-icon">&#9992;</span>
        <span class="logo-text">Travel <span>Insurance Info</span></span>
      </a>
      <ul class="nav-links">
        <li><a href="../index.html">Home</a></li>
        <li><a href="../about.html">About</a></li>
        <li><a href="../blog.html" class="active">Blog</a></li>
        <li><a href="../faq.html">FAQ</a></li>
        <li><a href="../contact.html">Contact</a></li>
      </ul>
      <button class="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <section class="blog-article-hero">
    <div class="container">
      <span class="blog-article-tag">BLOG_TAG</span>
      <h1>BLOG_TITLE</h1>
      <p class="blog-article-meta">Informational Guide &middot; IRDAI Compliant</p>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="blog-article-body">
'@

$shellBottom = @'
      </div>
    </div>
  </section>
  <div class="blog-nav">
    <a href="../blog.html">&larr; Back to all articles</a>
  </div>
  <section class="section alt-bg">
    <div class="container">
      <div class="disclaimer-box">
        <span class="warn-icon">&#9888;</span>
        <div>
          <strong>Content Disclaimer:</strong> This article is for informational and educational purposes only. It does not constitute insurance advice, recommendations, or endorsements. Readers should consult a licensed insurance advisor or refer to official IRDAI guidelines for specific insurance decisions. Information is based on publicly available IRDAI regulations and may be subject to change.
        </div>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-icon">&#9992;</span>
            <span style="color:#fff;">Travel Insurance Info</span>
          </div>
          <p>A free informational resource about travel insurance in India. We provide educational content to help travellers understand travel insurance, coverage options, and IRDAI regulations.</p>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <a href="../index.html">Home</a>
          <a href="../about.html">About Us</a>
          <a href="../blog.html">Blog</a>
          <a href="../faq.html">FAQ</a>
          <a href="../contact.html">Contact</a>
        </div>
        <div class="footer-col">
          <h4>Official Resources</h4>
          <a href="https://www.irdai.gov.in" target="_blank" rel="noopener">IRDAI</a>
          <a href="https://igms.irdai.gov.in" target="_blank" rel="noopener">IRDAI IGMS</a>
          <a href="https://ecoi.co.in" target="_blank" rel="noopener">Insurance Ombudsman</a>
          <a href="https://www.bimabharosa.irdai.gov.in" target="_blank" rel="noopener">Bima Bharosa</a>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <a href="../contact.html">Get in Touch</a>
          <a href="../contact.html">Grievance Redressal Info</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 Travel Insurance Info. All rights reserved.</span>
        <span>Informational Website — Not a seller of insurance.</span>
      </div>
    </div>
  </footer>
  <script src="../js/main.js"></script>
</body>
</html>
'@

$articles = @(
  @{f='basics.html'; t='Basics'; title='What is Travel Insurance? A Complete Guide for Indian Travellers'; d='Everything you need to know about travel insurance — how it works, what it covers, and why every Indian traveller should consider it before travelling abroad.'}
  @{f='coverage.html'; t='Coverage'; title='Understanding Travel Insurance Coverage Types'; d='A detailed breakdown of different travel insurance coverage options — individual, family, student, senior citizen, domestic, and annual multi-trip plans.'}
  @{f='claims.html'; t='Claims'; title='How to File a Travel Insurance Claim: Step-by-Step Guide'; d='Learn the proper procedure for filing a travel insurance claim, including required documents, timelines, and tips for a smooth claim process under IRDAI guidelines.'}
  @{f='regulations.html'; t='Regulations'; title='IRDAI Guidelines for Travel Insurance: What You Must Know'; d='An overview of the key IRDAI regulations governing travel insurance in India, including policyholder rights, grievance redressal, and claim settlement norms.'}
  @{f='health.html'; t='Health'; title='Medical Coverage in Travel Insurance: What&rsquo;s Included?'; d='Understanding the medical benefits of travel insurance — emergency hospitalisation, doctor visits, prescriptions, dental emergencies, and evacuation coverage.'}
  @{f='seniors.html'; t='Seniors'; title='Travel Insurance for Senior Citizens: Key Considerations'; d='Special considerations for senior travellers aged 60+ including higher medical cover limits, pre-existing condition options, and age-related policy features.'}
  @{f='exclusions.html'; t='Exclusions'; title='Common Exclusions in Travel Insurance Policies'; d='Understanding what is not covered by travel insurance — pre-existing conditions, adventure sports, high-risk destinations, and other standard exclusions.'}
  @{f='students.html'; t='Students'; title='Student Travel Insurance: Coverage for Studying Abroad'; d='Specialised travel insurance for Indian students going abroad for education — covering medical expenses, tuition fee loss, and more.'}
  @{f='covid.html'; t='COVID-19'; title='Does Travel Insurance Cover COVID-19? What You Should Know'; d='Understanding COVID-19 coverage in travel insurance policies — medical expenses, cancellation, quarantine costs, and testing requirements.'}
  @{f='rights.html'; t='Rights'; title='Your Rights as a Travel Insurance Policyholder Under IRDAI'; d='Know your rights as a policyholder — free look period, claim settlement timelines, grievance redressal, portability, and fair treatment by insurers.'}
  @{f='providers.html'; t='Providers'; title='Travel Insurance Providers in India: Registered Companies Offering Travel Insurance'; d='A comprehensive list of general insurance companies registered with IRDAI that offer travel insurance policies. Information is for reference purposes only.'}
)

ForEach ($a in $articles) {
  $content = $shellTop -replace 'BLOG_TITLE', $a.title -replace 'BLOG_DESC', $a.d -replace 'BLOG_TAG', $a.t
  $body = [System.IO.File]::ReadAllText("D:\Ajit Mane\articles-body-$($a.f)")
  $content += $body
  $content += $shellBottom
  Set-Content -LiteralPath "$blogDir\$($a.f)" -Value $content -NoNewline
  Write-Output "Created blog/$($a.f)"
}

Write-Output "All articles generated"
