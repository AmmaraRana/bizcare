import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './email-modal.html',
  styleUrls: ['./email-modal.css']
})
export class EmailModalComponent {
  // Subject/title for the modal
  @Input() subject: string = "Let’s Work Together";

  // Open/close state
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  // Form data model
  formData = {
    name: '',
    email: '',
    budget: '',
    service: '',
    message: ''
  };

  // Submit handler
  sendEmail() {
    // Placeholder: send formData to backend / email service
    // Example: Use an API call to SendGrid, Nodemailer, or server endpoint
    console.log("Form Submitted:", this.formData);

    //  TODO: Replace this with real email sending logic
    // fetch('https://your-backend.com/send-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(this.formData)
    // }).then(res => res.json())
    //   .then(data => console.log("Email sent!", data))
    //   .catch(err => console.error("Email error:", err));

    alert("Your message has been sent! (Demo only — connect to server)");
    this.close.emit(); // Close modal after submission
  }

  // Close modal on cancel
  onCancel() {
    this.close.emit();
  }
}
