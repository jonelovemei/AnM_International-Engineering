<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Contact Us - A&M INTERNATIONAL ENGINEERING</title>
  <link rel="stylesheet" href="styles.css" />
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    #header-placeholder {
      position: sticky;
      top: 0;
      z-index: 1000;
      width: 100%;
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      max-width: 1200px;
      margin-top: 80px; /* ✅ 增加 header 到正文的距离 */
      gap: 60px;
    }

    .contact-section {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      gap: 40px;
    }

    .contact-info {
      flex: 1;
    }

    .contact-info h2 {
      color: #005577;
      font-size: 20px;
      margin-bottom: 20px;
    }

    .contact-info p {
      font-size: 16px;
      color: #222;
      line-height: 1.6;
      margin: 5px 0;
    }

    .qr-section {
      flex-shrink: 0;
      text-align: center;
    }

    .qr-section img {
      width: 160px;
      height: auto;
    }

    .qr-section div {
      margin-top: 5px;
      font-size: 14px;
      color: #555;
    }

    /* ✅ Feedback整体居中 + 样式优化 */
    .feedback-container {
      width: 600px;
      background-color: #f4f4f4;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
    }

    .feedback-container h3 {
      text-align: center;
      color: #005577;
      margin-bottom: 20px;
    }

    .feedback-textarea {
      width: 100%;
      height: 200px;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #ddd;
      font-size: 16px; /* ✅ 字体放大 */
      font-weight: bold; /* ✅ 加粗 */
      color: #333;
      resize: none;
      margin-bottom: 15px;
    }

    .submit-btn {
      width: 100%;
      padding: 10px;
      border: none;
      background-color: #005577;
      color: white;
      font-size: 16px;
      border-radius: 4px;
      cursor: pointer;
    }

    .submit-btn:hover {
      background-color: #003f53;
    }

    /* 新增：消息提示样式 */
    .message {
      padding: 10px;
      margin: 10px 0;
      border-radius: 4px;
      width: 100%;
      text-align: center;
    }

    .success {
      background-color: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    .error {
      background-color: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    footer {
      text-align: center;
      padding: 20px 0;
      background-color: #333;
      color: white;
      margin-top: 60px;
      width: 100%;
    }
  </style>
</head>
<body>
  <div id="header-placeholder"></div>

  <script>
    fetch('header.html')
      .then(response => response.text())
      .then(data => document.getElementById('header-placeholder').innerHTML = data)
      .catch(error => console.error('Error loading header:', error));
  </script>

  <main>
    <!-- 联系信息 + QR码（横排） -->
    <div class="contact-section">
     <div class="contact-info">
  <h2>Contact Information</h2>
  <p>Phone: +65 8588 9506 (WhatsApp Same#)</p>
  <p>
    Email: 
    <a href="mailto:anm_info@anmie.com.sg?subject=Inquiry from Website&body=Dear A&M INTERNATIONAL ENGINEERING,%0D%0A%0D%0A"
       style="color:#005577; text-decoration:none;">
       anm_info@anmie.com.sg
    </a>
  </p>
  <p>WeChat: AM_Engineering</p>
  <p>Address: BLK13,#1408, Anchorval Crescent,(S)544650</p>
  <p>
    Website: 
    <a href="https://anmie.com.sg/" target="_blank" style="color:#005577; text-decoration:none;">
      https://anmie.com.sg/
    </a>
  </p>
</div>

      <div class="qr-section">
        <img src="Image/contact_qr_with_logo.png" alt="Contact QR Code with Logo" />
        <div>Scan to connect us on WeChat / WhatsApp</div>
      </div>
    </div>

    <!-- ✅ Feedback Form 发送 Email -->
    <form class="feedback-container" action="" method="POST">
      <h3>Feedback</h3>
      
      <?php
      // PHP邮件发送代码
      if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['message'])) {
          $to = "anm_info@anmie.com.sg";
          $subject = "New Feedback from A&M Website";
          $message = $_POST['message'];
          $headers = "From: website@anmie.com.sg\r\n";
          $headers .= "Reply-To: website@anmie.com.sg\r\n";
          $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
          
          // 添加时间戳和来源信息
          $full_message = "Feedback received on: " . date("Y-m-d H:i:s") . "\n\n";
          $full_message .= "Feedback Content:\n" . $message . "\n\n";
          $full_message .= "---\nThis message was sent from the A&M Website Contact Form";
          
          // 发送邮件
          if (mail($to, $subject, $full_message, $headers)) {
              echo '<div class="message success">Thank you! Your feedback has been sent successfully.</div>';
          } else {
              echo '<div class="message error">Sorry, there was an error sending your feedback. Please try again.</div>';
          }
      }
      ?>
      
      <textarea class="feedback-textarea" name="message" placeholder="Write your feedback here... (Max 500 characters)" maxlength="500" required></textarea>
      <button class="submit-btn" type="submit">Submit Feedback</button>
    </form>
  </main>

  <footer>
    <p>&copy; 2025 A&M INTERNATIONAL ENGINEERING PTE LTD. All rights reserved.</p>
  </footer>
</body>
</html>
