$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "fusor-ng/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "fusor-ng"
  s.version     = FusorNg::VERSION
  s.authors     = ["Red Hat"]
  s.email       = ["foreman-dev@googlegroups.com"]
  s.homepage    = "http://theforeman.org"
  s.summary     = "Fusor plugin using Bastion / Angular"
  s.description = "Fusor plugin using Bastion / Angular"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails"
  s.add_dependency "bastion"

  s.add_dependency "less-rails", "~> 2.5.0"
end
