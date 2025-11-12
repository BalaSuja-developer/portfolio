import React, { useState } from 'react';
import { Code, CheckCircle, GitBranch, Monitor, TestTube, Play } from 'lucide-react';

const TestingShowcase = () => {
  const [activeTab, setActiveTab] = useState('unit');

  const codeExamples = {
    unit: `@Test
@DisplayName("Should process booking workflow successfully")
class BookingServiceTest {
    
    @Mock
    private PaymentService paymentService;
    
    @Mock
    private NotificationService notificationService;
    
    @InjectMocks
    private BookingService bookingService;
    
    @Test
    void shouldProcessBookingSuccessfully() {
        // Given
        BookingRequest request = BookingRequest.builder()
            .customerId("customer-123")
            .serviceType("EXPRESS")
            .build();
            
        when(paymentService.processPayment(any()))
            .thenReturn(PaymentResult.success());
        
        // When
        BookingResult result = bookingService.processBooking(request);
        
        // Then
        assertThat(result.getStatus()).isEqualTo(BookingStatus.CONFIRMED);
        verify(notificationService).sendConfirmation(request.getCustomerId());
    }
}`,
    integration: `@SpringBootTest
@Testcontainers
class BookingIntegrationTest {
    
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:14")
            .withDatabaseName("testdb")
            .withUsername("test")
            .withPassword("test");
    
    @Autowired
    private TestRestTemplate restTemplate;
    
    @Test
    void shouldCreateAndRetrieveBooking() {
        // Given
        BookingRequest request = new BookingRequest(
            "customer-123", 
            "EXPRESS",
            LocalDateTime.now().plusDays(1)
        );
        
        // When
        ResponseEntity<BookingResponse> response = restTemplate
            .postForEntity("/api/bookings", request, BookingResponse.class);
        
        // Then
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody().getId()).isNotNull();
        
        // Verify persistence
        BookingResponse retrieved = restTemplate
            .getForObject("/api/bookings/" + response.getBody().getId(), 
                         BookingResponse.class);
        assertThat(retrieved.getCustomerId()).isEqualTo("customer-123");
    }
}`,
    workflow: `@Test
class TemporalWorkflowTest {
    
    private TestWorkflowRule testWorkflowRule = 
        TestWorkflowRule.newBuilder()
            .setWorkflowTypes(BookingWorkflow.class)
            .setActivityImplementations(new TestBookingActivities())
            .build();
    
    @Test
    void shouldCompleteBookingWorkflow() {
        // Given
        BookingWorkflow workflow = testWorkflowRule
            .getWorkflowClient()
            .newWorkflowStub(BookingWorkflow.class);
        
        BookingRequest request = new BookingRequest("customer-123", "EXPRESS");
        
        // When
        BookingResult result = workflow.processBooking(request);
        
        // Then
        assertThat(result.getStatus()).isEqualTo(BookingStatus.COMPLETED);
        
        // Verify all activities were called
        TestBookingActivities activities = (TestBookingActivities) 
            testWorkflowRule.getWorker().getActivityImplementations().get(0);
        assertThat(activities.getPaymentCalled()).isTrue();
        assertThat(activities.getNotificationSent()).isTrue();
    }
}`
  };

  const processSteps = [
    {
      step: 1,
      title: 'Code Commit',
      description: 'Developer pushes code changes',
      icon: GitBranch,
      color: 'text-blue-500'
    },
    {
      step: 2,
      title: 'Unit Tests',
      description: 'JUnit 5 & Mockito tests execute',
      icon: TestTube,
      color: 'text-emerald-500'
    },
    {
      step: 3,
      title: 'Integration Tests',
      description: 'API and database tests run',
      icon: CheckCircle,
      color: 'text-purple-500'
    },
    {
      step: 4,
      title: 'Quality Gates',
      description: 'Coverage & code quality checks',
      icon: Monitor,
      color: 'text-orange-500'
    },
    {
      step: 5,
      title: 'Deployment',
      description: 'Automatic deployment to staging',
      icon: Play,
      color: 'text-teal-500'
    }
  ];

  const coverageMetrics = [
    { metric: 'Unit Test Coverage', sevilai: 95, inhlth: 98 },
    { metric: 'Integration Coverage', sevilai: 92, inhlth: 95 },
    { metric: 'API Contract Tests', sevilai: 98, inhlth: 99 },
    { metric: 'Workflow Testing', sevilai: 94, inhlth: 97 }
  ];

  return (
    <section id="testing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Testing Excellence</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Rigorous automated testing within CI/CD pipelines, safeguarding system integrity and supporting rapid feature delivery at scale
          </p>
        </div>

        {/* CI/CD Process Diagram */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Automated Testing Pipeline</h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {processSteps.map((step, index) => (
              <React.Fragment key={step.step}>
                <div className="flex flex-col items-center bg-slate-50 rounded-xl p-6 min-w-[160px] hover:bg-slate-100 transition-colors">
                  <div className={`w-12 h-12 ${step.color} bg-opacity-10 rounded-full flex items-center justify-center mb-3`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mb-1">{step.title}</div>
                  <div className="text-xs text-slate-600 text-center">{step.description}</div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block w-8 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Code Examples */}
          <div className="bg-slate-900 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Testing Code Examples
            </h3>
            
            {/* Tabs */}
            <div className="flex space-x-1 mb-4 bg-slate-800 rounded-lg p-1">
              {[
                { key: 'unit', label: 'Unit Tests' },
                { key: 'integration', label: 'Integration' },
                { key: 'workflow', label: 'Workflows' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.key
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Code Display */}
            <div className="bg-slate-800 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-slate-200">
                <code>{codeExamples[activeTab as keyof typeof codeExamples]}</code>
              </pre>
            </div>
          </div>

          {/* Coverage Metrics */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <TestTube className="w-5 h-5 mr-2" />
                Test Coverage Metrics
              </h3>
              
              <div className="space-y-4">
                {coverageMetrics.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">{item.metric}</span>
                    </div>
                    
                    {/* Sevilai */}
                    <div className="mb-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-slate-600">Sevilai (Java)</span>
                        <span className="text-xs text-slate-600">{item.sevilai}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${item.sevilai}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* INHLTH */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-slate-600">INHLTH (Kotlin)</span>
                        <span className="text-xs text-slate-600">{item.inhlth}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${item.inhlth}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testing Benefits */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Testing Benefits Achieved</h3>
              <div className="space-y-3">
                {[
                  'Eliminated regressions through automated quality gates',
                  'Rapid feature delivery with system integrity protection',
                  'High-throughput scenario optimization',
                  'Mission-critical quality in healthcare domain',
                  'Proactive monitoring and instant diagnosis',
                  'Enhanced team collaboration through code reviews'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestingShowcase;